import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tarea extends Document {
    @Prop({
        required: true,
        minlength: 5
    })
    nombre: string;

    @Prop({
        required: true,
        min: 1,
        max: 5
    })
    prioridad: number;

    @Prop({
        required: true
    })
    fecha: Date;
}

export const TareaSchema = SchemaFactory.createForClass(Tarea);
