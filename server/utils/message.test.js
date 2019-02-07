var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

it('should generate correct message object', () => {
  var from = 'Melissa';
  var text = 'Some message';

  // store response in variable
  var message = generateMessage(from, text);
  // assert from match
  // assert text match
  // assert createdAt is number
  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from,text});
});

}); // end of generateMessage