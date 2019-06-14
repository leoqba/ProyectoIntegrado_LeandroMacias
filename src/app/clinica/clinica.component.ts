import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinica', 
  templateUrl: './clinica.component.html'
})

export class ClinicaComponent implements OnInit {

    images = ["assets/img/fachada.png", "assets/img/vio.png","assets/img/cubiculos.png", ];

  
    constructor() {}
  
    ngOnInit (){
  
    }
  }