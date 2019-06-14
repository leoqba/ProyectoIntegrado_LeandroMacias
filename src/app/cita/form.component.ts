import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Cita } from './cita';
import { CitaService } from './cita.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class CitaFormComponent implements OnInit {

 cita: Cita[];
 paginador: any;
 citaSeleccionada: Cita;


  constructor(private citaService: CitaService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.citaService.getCitas().subscribe(
      cita => this.cita = cita
    ); 
  }

  delete(cita: Cita): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar la cita ${cita.id} ${cita.createAt}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.citaService.delete(cita.id).subscribe(
          response => {
            this.cita = this.cita.filter(cli => cli !== cita)
            swal(
              'Cita Eliminada!',
              `Cita ${cita.id} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }



}
