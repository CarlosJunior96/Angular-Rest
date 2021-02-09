import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConstants} from "../app-constants";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient/** objeto para fazer as requisições **/
  ) { }

  /** retornando a lista de usuários **/
  getUsuariosLista(): Observable<any>{
   return this.http.get(AppConstants.baseUrlUsuarios)
  }
}
