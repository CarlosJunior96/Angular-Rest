import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Angular-Rest';

  constructor(
    private rotas: Router /** objeto do tipo Router que consegue acessar as rotas declaradas **/
  ) { }

  ngOnInit(): void {

    /** se o usuario tiven o token igual a null é renderizado para login **/
    if (localStorage.getItem('token') == null){
      this.rotas.navigate(['login']);
    }
  }

  /** método que limpar o token salvo no storage caso o usuário clique em sair **/
  public sair(){
    localStorage.clear();
    this.rotas.navigate(['login']);
  }
}
