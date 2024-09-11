module.exports = (sequelize, DataTypes) => {
    const Main_categories = sequelize.define('Main_categories', {
        name: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        description: {
            allowNull: true,
            type: DataTypes.STRING(1000)
        },
        num: {
            allowNull: true,
            type: DataTypes.INTEGER
        }
    }, { timestamps: false });

    Main_categories.associate = (models) => {
        Main_categories.belongsToMany(models.Items, { through: models.Sub_categories })
    }

    return Main_categories;
}
