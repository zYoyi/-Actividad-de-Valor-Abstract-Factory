import { FabricaMenuAbstracta } from './fabrica-menu.abstracta';
import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export class FabricaMenuAmericano extends FabricaMenuAbstracta {
  crearPlatoPrincipal(): PlatoPrincipal {
    return {
      nombre: 'Hamburguesa clásica',
      descripcion: 'Hamburguesa con carne, queso, lechuga y tomate',
      precio: 160,
    };
  }

  crearBebida(): Bebida {
    return {
      nombre: 'Malteada de vainilla',
      tamano: '450ml',
      precio: 55,
    };
  }

  crearPostre(): Postre {
    return {
      nombre: 'Pay de manzana',
      nivelDulzor: 'Alto',
      precio: 65,
    };
  }
}