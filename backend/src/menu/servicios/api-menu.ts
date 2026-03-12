export interface PlatoPrincipal {
  nombre: string
  descripcion: string
  precio: number
}

export interface Bebida {
  nombre: string
  tamano: string
  precio: number
}

export interface Postre {
  nombre: string
  nivelDulzor: string
  precio: number
}

export interface MenuRestaurante {
  restaurante: string
  platoPrincipal: PlatoPrincipal
  bebida: Bebida
  postre: Postre
}

export async function obtenerMenuRestaurante(
  tipoRestaurante: string,
): Promise<MenuRestaurante> {
  const respuesta = await fetch(`http://localhost:3000/menu/${tipoRestaurante}`)

  if (!respuesta.ok) {
    throw new Error('No se pudo obtener el menú del restaurante')
  }

  return respuesta.json()
}