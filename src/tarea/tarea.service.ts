import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from './entities/tarea.entity';

@Injectable()
export class TareaService {

  constructor(@InjectModel('tareas') 
    private readonly tareaModel: Model<Tarea>) {}

  async create(createTareaDto: CreateTareaDto) {
    const nuevoContacto = await this.tareaModel.create(createTareaDto);
    return nuevoContacto;  
  }

  async findAll() {
    const resultado = await this.tareaModel.find();
    if(resultado.length == 0)
      throw new InternalServerErrorException("No se encontraron resultados");
    return resultado;
  }

  async findOne(id: string) {
    const resultado = await this.tareaModel.findById(id);
    if(!resultado)
      throw new NotFoundException("Tarea no encontrada");
    return resultado;
  }

  async update(id: string, updateTareaDto: UpdateTareaDto) {
    const tareaActualizada = await this.tareaModel.findByIdAndUpdate(id,
      {$set: updateTareaDto}, {new: true, runValidators: true});
    if(!tareaActualizada)
      throw new NotFoundException("Tarea no encontrada");
    return tareaActualizada;
  }

  async remove(id: string) {
    const resultado = this.tareaModel.findByIdAndDelete(id);
    if(!resultado)
      throw new NotFoundException("Tarea no encontrada");
    return resultado;
  }
}
