const TopicData = require('../lib/topic_data');
var assert = require('assert');

module.exports = {

  'test TopicData() ': function () {
    const topicName = 'some-topic-name';
    const deviceTokens = [ 'token_1', 'token_2' ];

    const data = TopicData(topicName, deviceTokens);

    assert.equal(data.registration_tokens, deviceTokens);
    assert.equal(data.to, `/topics/${topicName}`);
  },

}