'use strict';
const { hashPassword } = require('../helpers/bcrypt');
const { User, Category } = require('../models');
const { v4: uuid } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let dataUsers = require('../db/user.json');
    let dataCategories = require('../db/category.json');
    let dataItems = require('../db/item.json');

    dataUsers.forEach((e) => {
      // e.id = uuid();
      e.password = hashPassword(e.password)
      e.updatedAt = e.createdAt = new Date();
    });

    // dataCategories.forEach((e) => {
    //   e.id = uuid();
    //   e.updatedAt = e.createdAt = new Date();
    // });

    await queryInterface.bulkInsert('Users', dataUsers);
    await queryInterface.bulkInsert('Categories', dataCategories);
    console.log(dataUsers);
    console.log(dataCategories);

    // for(let e of dataItems){
    //   e.id = uuid();
    //   const user = await User.findOne({ where: { username: 'admin1' } });
    //   e.authorId = user.id;
    //   const category = await Category.findOne({ where: { name: e.list } });
    //   delete e.list 
    //   e.categoryId = category.id;
    //   e.updatedAt = e.createdAt = new Date();
    // };

    await queryInterface.bulkInsert('Items', dataItems);
    console.log(dataItems);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete('Categories', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete('Users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
