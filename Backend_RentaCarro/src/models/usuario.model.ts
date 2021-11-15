import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  correo_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_persona: string;

  @property({
    type: 'string',
    required: true,
  })
  fl_rol: string;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
