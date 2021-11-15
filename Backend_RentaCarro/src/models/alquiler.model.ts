import {Entity, model, property} from '@loopback/repository';

@model()
export class Alquiler extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    default: null,
  })
  documcontrato_alquiler?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaentrega_alquiler: string;

  @property({
    type: 'date',
    required: true,
  })
  fechadevolucion_alquiler: string;

  @property({
    type: 'number',
    default: null,
  })
  valordiario_alquiler?: number;

  @property({
    type: 'number',
    required: true,
  })
  costototal_alquiler: number;

  @property({
    type: 'string',
    required: true,
  })
  estado_alquiler: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_cliente: string;


  constructor(data?: Partial<Alquiler>) {
    super(data);
  }
}

export interface AlquilerRelations {
  // describe navigational properties here
}

export type AlquilerWithRelations = Alquiler & AlquilerRelations;
