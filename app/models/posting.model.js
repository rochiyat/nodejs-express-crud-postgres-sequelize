module.exports = (sequelize, Sequelize) => {
    const Posting = sequelize.define("posting", {
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
  
    return Posting;
  };