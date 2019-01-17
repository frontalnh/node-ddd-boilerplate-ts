import { FindOptionsAttributesArray } from 'sequelize';

export interface Filter {
  where?;
  fields?;
  order?: any;
  limit?: number;
  skip?: number;
  offset?: number;
  include?: any[];
  attributes?: FindOptionsAttributesArray;
  raw?: boolean;
}

export interface UpdateOption<T> {
  where: Partial<T>;
}
