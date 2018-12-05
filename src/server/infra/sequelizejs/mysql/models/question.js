module.exports = function(sequelize, DataTypes) {
  var question = sequelize.define(
    'question',
    {
      questionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      category: {
        // 서비스 장애, 아이디/비밀번호 분실, 서비스 개선 제안, 기타
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      content: {
        type: DataTypes.STRING
      }
    },
    {
      tableName: 'question'
    }
  );

  return question;
};
