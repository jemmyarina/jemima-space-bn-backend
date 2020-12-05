

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'exampleTable',
    [
      {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: ' Barnardo',
        email: 'jondoe@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) { return queryInterface.bulkDelete('exampleTable', null, {}); }
