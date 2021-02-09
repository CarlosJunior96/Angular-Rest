import {Component, ModuleWithProviders, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

/** ativando a classe responsável para fazer as requisições HTTP/AJAX **/
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpInterceptorModule} from "./service/header-interceptor.service";


/** vetor criado que é responsável de receber os componentes que irão fazer as rotas entre as páginas **/
export const appRouters: Routes = [
  /** aqui será declarado todas as rotas **/

  /** path contém a URL que será responsável de redirecionar para o component **/
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

/** declarando um vetor que recebe todas as rotas criadas **/
export const rotas: ModuleWithProviders<any> = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    rotas,
    NgbModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
