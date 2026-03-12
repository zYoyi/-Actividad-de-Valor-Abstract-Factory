import { Controller, Get, Param } from '@nestjs/common';
import { MenuService } from '../servicios/menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('restaurantes')
  obtenerRestaurantes() {
    return this.menuService.obtenerTiposRestaurante();
  }

  @Get(':tipoRestaurante')
  obtenerMenu(@Param('tipoRestaurante') tipoRestaurante: string) {
    return this.menuService.obtenerMenuPorTipo(tipoRestaurante);
  }
}