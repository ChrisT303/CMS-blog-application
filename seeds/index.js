const sequelize = require("../config/connection");
const seedUser = require("./user-seeds");
const seedPost = require("./post-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  process.exit(0);
};

seedAll();