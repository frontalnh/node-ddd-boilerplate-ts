module.exports = function(sequelize, DataTypes) {
  var alliance = sequelize.define(
    'alliance',
    {
      allianceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      companyName: {
        type: DataTypes.STRING
      },
      companyAddress: {
        type: DataTypes.STRING
      },
      companyType: {
        // GOVERNMENT, PRIVATE, ETC
        type: DataTypes.STRING
      },
      managerName: {
        type: DataTypes.STRING
      },
      managerTel: {
        type: DataTypes.STRING
      },
      managerEmail: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      },
      // "attachedFile": {
      //   "index":{
      //     "fileName":"fineName",
      //     "filePath":"filePath"
      //   }
      // },
      attachedFile: {
        type: DataTypes.JSON
      },
      hompageUrl: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'alliance'
    }
  );

  return alliance;
};
