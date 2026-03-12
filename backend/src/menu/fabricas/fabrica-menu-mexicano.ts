import { FabricaMenuAbstracta } from './fabrica-menu.abstracta';
import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export class FabricaMenuMexicano extends FabricaMenuAbstracta {

  crearPlatoPrincipal(): PlatoPrincipal {
    return {
      nombre: 'Tacos al pastor',
      descripcion: 'Tacos con carne al pastor, piña, cebolla y cilantro',
      precio: 120
    };
  }

  crearBebida(): Bebida {
    return {
      nombre: 'Agua de jamaica',
      tamano: '500ml',
      precio: 35
    };
  }

  crearPostre(): Postre {
    return {
      nombre: 'Flan',
      nivelDulzor: 'Medio',
      precio: 45
    };
  }
}