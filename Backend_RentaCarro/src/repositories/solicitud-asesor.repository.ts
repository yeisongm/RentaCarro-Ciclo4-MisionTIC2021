import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {SolicitudAsesor, SolicitudAsesorRelations} from '../models';

export class SolicitudAsesorRepository extends DefaultCrudRepository<
  SolicitudAsesor,
  typeof SolicitudAsesor.prototype.id,
  SolicitudAsesorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(SolicitudAsesor, dataSource);
  }
}
