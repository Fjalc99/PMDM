export class AlumnoDto {
    constructor(
      public nombre: string,
      public apellidos: string,
      public NIF: string,
      public email: string,
      public telefono: string,
      public sexo: string,
      public comoConocioLaPagina: string,
      public contraseña: string,
      public repetirContraseña: string,
    ) {}
  }