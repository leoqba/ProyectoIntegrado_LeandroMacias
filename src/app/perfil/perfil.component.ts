import { Component, OnInit } from '@angular/core';
import { AuthService } from '../usuarios/auth.service';
import { Cliente } from '../clientes/cliente';
import { ClienteService } from '../clientes/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.clienteService.getClientes(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent: tap 3');
            (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
          })
        ).subscribe(response => {
          this.clientes = response.content as Cliente[];
        });
    });
  }

}
