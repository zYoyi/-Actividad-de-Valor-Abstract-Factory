import { FabricaMenuAbstracta } from './fabrica-menu.abstracta';
import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export class FabricaMenuItaliano extends FabricaMenuAbstracta {
  crearPlatoPrincipal(): PlatoPrincipal {
    return {
      nombre: 'Pasta Alfredo',
      descripcion: 'Pasta cremosa con salsa Alfredo y queso parmesano',
      precio: 170,
    };
  }

  crearBebida(): Bebida {
    return {
      nombre: 'Limonada italiana',
      tamano: '500ml',
      precio: 45,
    };
  }

  crearPostre(): Postre {
    return {
      nombre: 'Tiramisú',
      nivelDulzor: 'Medio',
      precio: 60,
    };
  }
}