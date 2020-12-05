

export function up(queryInterface, Sequelize) {
  return queryInterface.bulkInsert(
    'cities',
    [
      {
        name: 'kigali',
        country: 'rwanda'
      },
      {
        name: 'kampala',
        country: 'uganda'
      },
      {
        name: 'bujumbura',
        country: 'burundi'
      },
    ],
    {}
  );
}
export function down(queryInterface, Sequelize) { return queryInterface.bulkDelete('cities', null, {}); }
