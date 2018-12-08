jest.mock('fs');
jest.mock('../argsParser');
jest.mock('../transformer');

const fs = require('fs');
const argv = require('../argsParser');
const transformer = require('../transformer');

require('../index');

describe('index', () => {
  it('should call fs.readFileSync with the filename and encoding provided within the argument', () => {
    expect(fs.readFileSync).toHaveBeenCalledWith('mockInputFile', "mockEncoding");
  });
  it('should call the transformer on the data structure parsed from the file', () => {
    expect(transformer).toHaveBeenCalledWith({
      "one": "two"
    });
  });
  it('should call fs.writeFileSync with the transformed locale and proper encoding', () => {
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "mockOutputFile",
      JSON.stringify({
        transformed: "locale"
      }, null, 2),
      "mockEncoding"
    );
  });
});