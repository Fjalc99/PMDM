export interface CodigoPostal {
  "code-list": CodeList[]
}

export interface CodeList {
  codigo_postal: number
  municipio_id: number
  municipio_nombre: string
}