export class Usuario {

  private id: number;
  private nome: string;
  private login: string;
  private cpf: string;
  private cep: string;

  public getId(): number{
    return this.id;
  }

  public getNome(): string{
    return this.nome;
  }

  public getLogin(): string{
    return this.login;
  }

  public getCpf(): string{
    return this.cpf;
  }

  public getCep(): string{
    return this.cep;
  }
}
