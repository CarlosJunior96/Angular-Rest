import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../service/usuario.service";
import {Observable} from "rxjs";
import {Usuario} from "../../model/usuario";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<Usuario[]>

  constructor(
    private usuarioService: UsuarioService /** instanciando objeto do tipo serviço **/
  ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuariosLista().subscribe(dados => {

      /** o retorno da requisição é atribuído a variável de estudantes **/
      this.usuarios = dados;
      console.info(this.usuarios)
    });
  }

}
