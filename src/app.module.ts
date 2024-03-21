import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TareaModule,
    MongooseModule.forRoot('mongodb://127.0.0.1/tareas-nest'),
    UsuarioModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
