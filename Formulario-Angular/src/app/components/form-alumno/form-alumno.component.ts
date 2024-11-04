import { Component, OnInit } from '@angular/core';
import { AlumnoDto } from '../../models/alumno.dto';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrl: './form-alumno.component.css'
})
export class FormAlumnoComponent implements OnInit {

  OpcionComoConocioLaPagina = ['A trave de Google', 'A traves de un amigo', 'Por mi profesor'];
  ListaSexo = ['Hombre', 'Mujer', 'Otro'];
  mensajeContrasena = '';
  alumno = new AlumnoDto('Fran', 'Alcantarilla', '4726612N', 'f@gmail.com', '658747595', 'Hombre', 'Por mi profesor', '1234', '1234');
  submitted = false;


  constructor() {}
  ngOnInit(): void {
    this.validarContrasenas();
  }

  addAlumno() {
    console.log(this.alumno);
    this.submitted = true;
  }

  validarContrasenas(): void {
    if (this.alumno.password === this.alumno.repPassword) {
      this.mensajeContrasena = 'Las contraseñas coinciden';
      console.log(this.mensajeContrasena);
    } else {
      this.mensajeContrasena = 'Las contraseñas no coinciden';
      console.log(this.mensajeContrasena);
    }
  }

  onSubmit() {
    if (this.alumno.password !== this.alumno.repPassword) {
      this.mensajeContrasena = 'Las contraseñas no coinciden';
      console.log("Error: las contraseñas no coinciden.");
    } else {
      console.log("Datos de registro:", this.alumno);
      this.submitted = true;
      this.mensajeContrasena = '';
    }
  }

}
