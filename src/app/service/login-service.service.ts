import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../app-constants';

/** importando classe responsável pelas rotas **/
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(
    private http: HttpClient, /** objeto criado responsável de fazer os acessos aos métodos HTTP **/
    private rotas: Router /** objeto que recebe as rotas **/
  ) { }

  login(usuario){


    console.info();

    /** fazendo post para a API no endereço HTTP **/
    /** JSON.stringify() coverte os dados de usuario para o tipo JSON **/
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario))

      /** método responsavel de trazer o retorno de dados da requisição HTTP **/
      .subscribe(data => {
        /** convertendo um token para o tipo JSON separado o BEARER do token gerado **/
        var token = JSON.parse(JSON.stringify(data)).Authorization.split(" ")[1];

        /** localStorage() tem a função de armazenar a sessão // esconder no frontend o TOKEN RECEBIDO DO SERVIDOR **/
        /** esse localStorage permite que o token não seja perdido quando a janela é fechada do navegador **/
        localStorage.setItem("token", token);
        console.log(token);
        console.log("Sucesso no Login!");
        this.rotas.navigate(['home']);
        },
        error => {
          alert("Acesso Negado!!!")
        }
      )
  }
}
