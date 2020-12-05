import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class hotels extends Model {

    static associate(models) {
      // define association here
      hotels.hasOne(models.cities,{
          foreignKey: 'cityId',
          as:'hotelsCity',
      });
    }
  };
  
  hotels.init({
    name: DataTypes.STRING,
    manager: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'hotels',
  });
  return hotels;
};