import { Component } from '@angular/core';
import { Alumno } from '../../models/alumno.dto';

@Component({
  selector: 'app-alumnos-add-forms',
  templateUrl: './alumnos-add-forms.component.html',
  styleUrl: './alumnos-add-forms.component.css'
})
export class AlumnosAddFormsComponent {

  cursoLista = ['1º Dam', '2º Dam', '1º AYF', '2º AYF'];
  alumno = new Alumno('Fran', '1º Dam', 'fj@gmail.com', 0);
}
