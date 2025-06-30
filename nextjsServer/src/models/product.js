//Product 모델 정의
module.exports = (sequelize, DataTypes) => {
  const newProduct = sequelize.define(
    "Product",
    {
      // 모델의 속성 정의
      id: {
        // unsigned는 양수만 허용
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      imageUrl: { type: DataTypes.STRING(255), allowNull: true },
      spec: {
        type: DataTypes.ENUM("new", "hit", "best", "normal"),
        defaultValue: "normal",
      },
      // createdAt: {
      //   type: DataTypes.DATE,
      //   defaultValue: DataTypes.NOW,
      // },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   defaultValue: DataTypes.NOW,
      // },
    },
    {
      // 모델 옵션
      tableName: "products",
      timestamps: true, // createdAt, updatedAt 자동 생성
      underscored: true, // camelCase 대신 snake_case 사용
    }
  );
  return newProduct;
};
