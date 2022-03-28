import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-alumno',
  templateUrl: './item-alumno.component.html',
  styleUrls: ['./item-alumno.component.css']
})
export class ItemAlumnoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alumnoList=[
    {Nombre:"Pablo",Apellido:"Silva",Edad:"30",Nota:Number(2),Ciudad:"Buenos Aires"},
    {Nombre:"Jorge",Apellido:"Souza",Edad:"27",Nota:Number(4),Ciudad:"Quito"},
    {Nombre:"Pedro",Apellido:"Rodriguez",Edad:"32",Nota:Number(2),Ciudad:"Salvador"},
    {Nombre:"Mario",Apellido:"Baracu",Edad:"40",Nota:Number(8),Ciudad:"Bogota"},
    {Nombre:"Martin",Apellido:"Fanesi",Edad:"21",Nota:Number(5),Ciudad:"Brasilia"},
    {Nombre:"Lucas",Apellido:"Cardenas",Edad:"31",Nota:Number(3),Ciudad:"Lima"},
   ];
}
