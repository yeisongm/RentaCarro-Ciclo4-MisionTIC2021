import {Entity, model, property} from '@loopback/repository';

@model()
export class Vehiculo extends Entity {
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
  marca_vehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  color_vehiculo: string;

  @property({
    type: 'string',
    default: null,
  })
  modelo_vehiculo?: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_vehiculo: string;

  @property({
    type: 'string',
    default: null,
  })
  foto_vehiculo?: string;

  @property({
    type: 'number',
    required: true,
  })
  valor_vehiculo: number;

  @property({
    type: 'string',
    default: null,
  })
  enlacevideo_vehiculo?: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_asesor: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_tpvehiculo: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_ciudad: string;


  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
