import { Controller, Get, Post, Body, Put, Param, Delete, ValidationPipe, UsePipes, UseGuards } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('tarea')
@UsePipes(ValidationPipe)
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createTareaDto: CreateTareaDto) {
    return this.tareaService.create(createTareaDto);
  }

  @Get()
  findAll() {
    return this.tareaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareaService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTareaDto: UpdateTareaDto) {
    return this.tareaService.update(id, updateTareaDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaService.remove(id);
  }
}
