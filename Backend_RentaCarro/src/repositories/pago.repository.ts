import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Pago, PagoRelations} from '../models';

export class PagoRepository extends DefaultCrudRepository<
  Pago,
  typeof Pago.prototype.id,
  PagoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Pago, dataSource);
  }
}
