import { Component } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrl: './form-alumno.component.css'
})
export class FormAlumnoComponent {

  OpcionComoConocioLaPagina = ['A trave de Google', 'A traves de un amigo', 'Por mi profesor'];
  alumno = new AlumnoDto('Fran', 'Alcantarilla', '4726612N', 'f@gmail.com', '658747595', 'Hombre', 'Por mi profesor', '1234', '1234');
  submitted = false;
  constructor() {}

  addAlumno() {
    console.log(this.alumno);
    this.submitted = true;
  }





}
