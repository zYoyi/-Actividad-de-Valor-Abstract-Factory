import { PlatoPrincipal } from './plato-principal.interface';
import { Bebida } from './bebida.interface';
import { Postre } from './postre.interface';

export interface Menu {
  restaurante: string;
  platoPrincipal: PlatoPrincipal;
  bebida: Bebida;
  postre: Postre;
}