const fcm = require('../index.js');

// must replace 'SERVER_KEY' for you key
const FCM = new fcm('SERVER_KEY');
var assert = require('assert');

module.exports = {

  'test FCM.subscribeToTopic() ': function (done) {
    FCM.subscribeToTopic([ 'test_topic' ], 'some_topic_name', (err, res) => {
      assert.ifError(err);
      assert.ok(res);
      done();
    });
  },
  'test FCM.unsubscribeToTopic() ': function (done) {
    FCM.unsubscribeToTopic([ 'test_topic' ], 'some_topic_name', (err, res) => {
      assert.ifError(err);
      assert.ok(res);
      done();
    });
  }
}