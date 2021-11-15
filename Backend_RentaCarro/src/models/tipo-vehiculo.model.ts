import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoVehiculo extends Entity {
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
  nombre_tpvehiculo: string;

  @property({
    type: 'number',
    default: null,
  })
  porcenparticipacion_tpvehiculo?: number;


  constructor(data?: Partial<TipoVehiculo>) {
    super(data);
  }
}

export interface TipoVehiculoRelations {
  // describe navigational properties here
}

export type TipoVehiculoWithRelations = TipoVehiculo & TipoVehiculoRelations;
