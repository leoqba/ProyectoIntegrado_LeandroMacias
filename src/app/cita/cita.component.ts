import { Component, OnInit } from '@angular/core';
import { Cita } from './cita';
import { CitaService } from './cita.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html'
})
export class CitaComponent implements OnInit {

  private cita: Cita = new Cita();
  titulo: string = "Concerta una Cita"

  errores: String[];

  constructor(private citaService: CitaService, private router: Router) { }

  ngOnInit() {
  }

  create(): void {
    console.log(this.cita);
    this.citaService.create(this.cita)
    .subscribe(
      cita =>{
        this.router.navigate(['/clinica'])
        swal('Usted ha solicitado una cita para:', `Cita ${cita.createAt} creada con éxito!`, 'success')
      },
      err => {
        this.errores = err.error.error as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    )
  }



}
