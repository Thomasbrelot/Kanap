import { Model, DataTypes } from 'sequelize';

export class Product extends Model {
  static associate(models) {
    // Si associations à définir plus tard
  }
}

export const initProductModel = (sequelize) => {
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      altTxt: DataTypes.STRING,
      colors: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );

  return Product;
};
