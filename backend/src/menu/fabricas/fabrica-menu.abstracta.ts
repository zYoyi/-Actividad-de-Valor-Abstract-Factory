import { PlatoPrincipal } from '../interfaces/plato-principal.interface';
import { Bebida } from '../interfaces/bebida.interface';
import { Postre } from '../interfaces/postre.interface';

export abstract class FabricaMenuAbstracta {
  abstract crearPlatoPrincipal(): PlatoPrincipal;
  abstract crearBebida(): Bebida;
  abstract crearPostre(): Postre;
}