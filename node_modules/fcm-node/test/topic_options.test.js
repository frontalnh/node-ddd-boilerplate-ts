const TopicOptions = require('../lib/topic_options.js');
var assert = require('assert');

module.exports = {

  'test TopicOptions() ': function () {
    const host = 'iid.googleapis.com/iid';
    const path = '/v1:batchAdd';
    const method = 'POST';
    const serverKey = 'SERVER_KEY';
    
    const options = TopicOptions(host, path, method, serverKey);
    assert.equal(options.host, host);
    assert.equal(options.path, path);
    assert.equal(options.method, method);
    assert.equal(options.headers.Host, host);
    assert.equal(options.headers.Authorization, 'key=SERVER_KEY');
  },

}