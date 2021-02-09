import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()

/** classe que vai fazer as interceptações no projeto **/
export class HeaderInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /** verificando se tem o token armazenado no localStorage() **/
    if(localStorage.getItem('token') != null){

      /** caso tenha token é feito a junção do token com o bearer **/
      const token = "Bearer " + localStorage.getItem('token')

      /** sobrescrevendo a req no angular do token e passando no cabeçalho HTTP **/
      /** clone() resgata a requisição e à atualiza**/
      const tokenRequest = req.clone({

        /** passando o token para o cabeçalho HTTP da requisição **/
        headers: req.headers.set('Authorization', token)
      });

      /** retornando o token para a interceptação HTTP **/
      return next.handle(tokenRequest);
    }

    /** caso o token seja nulo retorna apenas a req do intercept **/
    else if(localStorage.getItem('token') == null){
      return next.handle(req)
    }
  }
}

/** transformando essa classe em um módulo **/
@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  }]
})

/** essa classe é declarada para que o angular leia a interceptação **/
/** precisa de uma classe externa para ser exportado em um método **/
export class HttpInterceptorModule{

}
