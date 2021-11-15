import {Entity, model, property} from '@loopback/repository';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_solicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_solicitud: string;

  @property({
    type: 'string',
    default: null,
  })
  descripcion_solicitud?: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_vehiculo: string;


  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
