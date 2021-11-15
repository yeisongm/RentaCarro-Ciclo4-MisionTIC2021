import {Entity, model, property} from '@loopback/repository';

@model()
export class Pago extends Entity {
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
  numtarjeta_pago: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_pago: string;

  @property({
    type: 'string',
    required: true,
  })
  fototarjeta_pago: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_solicitud: string;


  constructor(data?: Partial<Pago>) {
    super(data);
  }
}

export interface PagoRelations {
  // describe navigational properties here
}

export type PagoWithRelations = Pago & PagoRelations;
