var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 2;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=2,1'
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});
  });
}); // end of generateLocationMessage
