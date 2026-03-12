import { FabricaMenuAbstracta } from './fabrica-menu.abstracta';
import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export class FabricaMenuJapones extends FabricaMenuAbstracta {
  crearPlatoPrincipal(): PlatoPrincipal {
    return {
      nombre: 'Ramen',
      descripcion: 'Sopa japonesa con fideos, caldo y carne',
      precio: 180,
    };
  }

  crearBebida(): Bebida {
    return {
      nombre: 'Té verde',
      tamano: '400ml',
      precio: 40,
    };
  }

  crearPostre(): Postre {
    return {
      nombre: 'Mochi',
      nivelDulzor: 'Bajo',
      precio: 50,
    };
  }
}