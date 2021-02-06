import { Component } from '@angular/core';
import {LoginServiceService} from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Rest';

  constructor(
    private loginService: LoginServiceService /** objeto criado que faz acesso ao serviço do login **/
  ) { }

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
