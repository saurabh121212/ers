'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('users', {
        id: {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true},
        name: {
            type: DataTypes.STRING(50),
        },
        email: {
            type: DataTypes.STRING(190),
            allowNull: false,
            validate: {isEmail: {msg: "Email is invalid."}}
        },
        password: DataTypes.STRING(100),
    }, {
        paranoid: true,
        timestamps: true
    });

    UserModel.associate = function (models) {
        // associations can be defined here
    };

    UserModel.beforeSave(user => {
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        }
    });

    UserModel.beforeCreate(async (user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });
    
    UserModel.prototype.comparePassword = function (pw) {
        return bcrypt.compareSync(pw, this.password);
    };
    return UserModel;
};
