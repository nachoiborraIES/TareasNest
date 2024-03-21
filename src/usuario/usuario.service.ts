import { Injectable } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';

@Injectable()
export class UsuarioService {
    // Listado predefinido de usuarios para simplificar el proceso
    private readonly usuarios: Usuario[] = [
        {
          login: 'usuario1',
          password: 'password1'
        },
        {
          login: 'usuario2',
          password: 'password2'
        },
    ];
    
    async buscar(login: string, password: string): Promise<Usuario | undefined> {
        return this.usuarios.find(u => u.login === login && u.password == password);
    }
}