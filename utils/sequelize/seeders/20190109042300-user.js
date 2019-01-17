'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'user',
      [
        {
          id: 1,
          permission: 'ADMIN',
          email: 'admin@bluewhale.foundation',
          password:
            '$2b$10$amI08gl/xYpvExh/i5pFyeskzfPSm/pL.J7mm6Mk7MCrFip3xNUG.',
          firstName: 'BlueWhale',
          lastName: '',
          KYCStatus: 'INVALID',
          status: 'ACTIVE',
          createdAt: '2018-11-30 04:47:01',
          updatedAt: '2018-11-30 04:47:01'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};
