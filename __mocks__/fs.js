module.exports = {
  readFileSync: jest.fn(() => {
    return JSON.stringify({
      "one": "two"
    });
  }),
  writeFileSync: jest.fn()
}