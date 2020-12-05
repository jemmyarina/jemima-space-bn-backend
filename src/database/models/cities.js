

import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class cities extends Model {

    static associate(models) {
    }
  };
  cities.init({
    name: DataTypes.STRING,
    country: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'cities',
  });
  return cities;
};