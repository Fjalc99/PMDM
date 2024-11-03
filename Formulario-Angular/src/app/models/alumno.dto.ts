export class AlumnoDto {
    constructor(
      public nombre: string,
      public apellidos: string,
      public dni: string,
      public email: string,
      public telefono: string,
      public sexo: string,
      public comoConocioLaPagina: string,
      public password: string,
      public repPassword: string,
    ) {}
  }