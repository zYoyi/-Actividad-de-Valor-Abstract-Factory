import { Injectable, NotFoundException } from '@nestjs/common';
import { FabricaMenuAbstracta } from '../fabricas/fabrica-menu.abstracta';
import { FabricaMenuMexicano } from '../fabricas/fabrica-menu-mexicano';
import { FabricaMenuJapones } from '../fabricas/fabrica-menu-japones';
import { FabricaMenuItaliano } from '../fabricas/fabrica-menu-italiana';
import { FabricaMenuAmericano } from '../fabricas/fabrica-menu-americano';
import { FabricaMenuChino } from '../fabricas/fabrica-menu-china';
import { Menu } from '../interfaces/menu.interface';

@Injectable()
export class MenuService {
  obtenerMenuPorTipo(tipoRestaurante: string): Menu {
    const fabrica = this.resolverFabrica(tipoRestaurante);

    return {
      restaurante: tipoRestaurante,
      platoPrincipal: fabrica.crearPlatoPrincipal(),
      bebida: fabrica.crearBebida(),
      postre: fabrica.crearPostre(),
    };
  }

  obtenerTiposRestaurante(): string[] {
    return ['mexicano', 'japones', 'italiano', 'americano', 'chino'];
  }

  private resolverFabrica(tipoRestaurante: string): FabricaMenuAbstracta {
    switch (tipoRestaurante.toLowerCase()) {
      case 'mexicano':
        return new FabricaMenuMexicano();
      case 'japones':
        return new FabricaMenuJapones();
      case 'italiano':
        return new FabricaMenuItaliano();
      case 'americano':
        return new FabricaMenuAmericano();
      case 'chino':
        return new FabricaMenuChino();
      default:
        throw new NotFoundException(
          `No existe una fábrica para el restaurante ${tipoRestaurante}`,
        );
    }
  }
}