import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TareaSchema } from './entities/tarea.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'tareas',
      schema: TareaSchema
    }])
  ],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
