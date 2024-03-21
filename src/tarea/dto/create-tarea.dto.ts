import { IsString, MinLength, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateTareaDto {

    @IsString({message: "El nombre debe ser un texto"})
    @MinLength(5, {message: "El nombre debe tener una longitud de al menos 5 caracteres"})
    readonly nombre: string;

    @IsInt({message: "La prioridad debe ser un número entero"})
    @Min(1, {message: "La prioridad mínima es 1"})
    @Max(5, {message: "La prioridad máxima es 5"})
    readonly prioridad: number;

    @IsNotEmpty({message: "La fecha no puede estar vacía"})
    readonly fecha: Date;
}
