import { Module } from '@nestjs/common';
import { MenuController } from './controladores/menu.controller';
import { MenuService } from './servicios/menu.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}