/** classe onde é criado métodos estáticos que tem a funcionalidade de receber as urls da api
 *  assim facilitando sempre a chamada do endereço HTTP **/

export class AppConstants {

  /** método estático que retorna o url base da API **/
  public static get baseServidor(): string{
    return "http://localhost:8080/springrestapi";
  }

  /** método estático que retorna a url de login da API **/
  public static get baseLogin(): string{
    return this.baseServidor + "/login";
  }

  /** método estático que retorna a url de usuarios da API **/
  public static get baseUrlUsuarios(): string{
    return this.baseServidor + "/usuarios/";
  }

}
