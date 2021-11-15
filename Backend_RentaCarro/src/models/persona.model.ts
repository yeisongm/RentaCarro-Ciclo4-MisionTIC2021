import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
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
  nombres_persona: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos_persona: string;

  @property({
    type: 'string',
    required: true,
  })
  documento_persona: string;

  @property({
    type: 'string',
    required: true,
  })
  tpdocumento_persona: string;

  @property({
    type: 'string',
    default: null,
  })
  telefono_persona?: string;


  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
