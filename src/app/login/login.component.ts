import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from "../service/login-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private loginService: LoginServiceService /** objeto criado que faz acesso ao serviço do login **/
  ) { }

  ngOnInit(): void {
  }

  /** declarando usuario para pegar campos do formulário para recebimento do login e senha **/
  usuario = {
    login: '',
    senha: ''
  };

  /** método responsável para fazer o login do usuário **/
  public login(){
    this.loginService.login(this.usuario);
  }

}
