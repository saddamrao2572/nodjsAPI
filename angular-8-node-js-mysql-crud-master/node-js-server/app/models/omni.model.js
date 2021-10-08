module.exports = (sequelize, Sequelize) => {
  const Omni = sequelize.define("Omni", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Omni;
};
