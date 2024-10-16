import { Component } from '@angular/core';



export interface PeriodicElement {
  nombre: string;
  numAlumno: number;
  apellidos: string;
  nif: string;
  edad: number;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {numAlumno: 1, nombre: 'Fran',apellidos: 'Calado',nif: '47266126N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 2, nombre: 'Marissa',apellidos: 'Calado',nif: '14578585H'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 3, nombre: 'Candi',apellidos: 'Calado',nif: '26574952K'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 4, nombre: 'Fran G',apellidos: 'Calado',nif: '534734324N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 5, nombre: 'Luisa',apellidos: 'Calado',nif: '98745216N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 6, nombre: 'Olga',apellidos: 'Calado',nif: '4457821526N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 7, nombre: 'David',apellidos: 'Calado',nif: '675823568N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 8, nombre: 'Carlos',apellidos: 'Calado',nif: '47847123N'  ,edad: 25, curso: '2ºDam'},
  {numAlumno: 9, nombre: 'Lucas',apellidos: 'Calado',nif: '4566484865N'  ,edad: 25, curso: '2ºDam'},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})

export class TablaComponent {
  displayedColumns: string[] = ['numAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'curso'];
  listAlumno = ELEMENT_DATA;
}
