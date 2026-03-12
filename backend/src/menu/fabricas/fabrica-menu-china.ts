import { FabricaMenuAbstracta } from './fabrica-menu.abstracta';
import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export class FabricaMenuChino extends FabricaMenuAbstracta {
  crearPlatoPrincipal(): PlatoPrincipal {
    return {
      nombre: 'Chow mein',
      descripcion: 'Fideos salteados con verduras y pollo',
      precio: 175,
    };
  }

  crearBebida(): Bebida {
    return {
      nombre: 'Té jazmín',
      tamano: '400ml',
      precio: 35,
    };
  }

  crearPostre(): Postre {
    return {
      nombre: 'Rollito dulce',
      nivelDulzor: 'Medio',
      precio: 48,
    };
  }
}