const TopicRequest = require('../lib/topic_request');
const TopicOptions = require('../lib/topic_options');
const TopicData = require('../lib/topic_data');
var assert = require('assert');

module.exports = {

  'test TopicRequest() ': function (done) {

    // must replace 'SERVER_KEY' for you key
    const options = TopicOptions('iid.googleapis.com', '/iid/v1:batchAdd', 'POST', 'SERVER_KEY');
    const data = TopicData('some_topic_name', [ 'teste' ]);
    TopicRequest(options, data, (err, res) => {
      assert.ifError(err);
      assert.ok(res);
      done();
    });
  }
}