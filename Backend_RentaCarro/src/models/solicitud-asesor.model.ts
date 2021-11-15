import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudAsesor extends Entity {
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
  enlace_solicitudasesor?: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_solicitudasesor: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_solicitudasesor: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_asesor: string;

  @property({
    type: 'string',
    required: true,
  })
  fk_administrador: string;


  constructor(data?: Partial<SolicitudAsesor>) {
    super(data);
  }
}

export interface SolicitudAsesorRelations {
  // describe navigational properties here
}

export type SolicitudAsesorWithRelations = SolicitudAsesor & SolicitudAsesorRelations;
