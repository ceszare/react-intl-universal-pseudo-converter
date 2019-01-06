const transformer = require("../transformer");

describe("transformer", () => {
  it("should transform string values on nested dictionaries", () => {
    const input = {
      one: "two",
      three: {
        four: "five",
        six: "seven"
      }
    };
    const output = {
      one: "translation for two",
      three: {
        four: "translation for five",
        six: "translation for seven"
      }
    };
    expect(transformer(input)).toEqual(output);
  });
  it("should leave primitives intact", () => {
    const input = {
      one: 2,
      three: true,
      four: false,
      five: null
    };
    expect(transformer(input)).toEqual(input);
  });
  it("should process data inside arrays properly", () => {
    const input = {
      one: [
        {
          two: {
            three: "four",
            five: ["six", "seven"]
          }
        },
        "eight",
        "nine"
      ]
    };
    const output = {
      one: [
        {
          two: {
            three: "translation for four",
            five: ["translation for six", "translation for seven"]
          }
        },
        "translation for eight",
        "translation for nine"
      ]
    };
    expect(transformer(input)).toEqual(output);
  });
  it("should return the appropriate values for leaf nodes", () => {
    expect(transformer(true)).toEqual(true);
    expect(transformer(false)).toEqual(false);
    expect(transformer(1)).toEqual(1);
    expect(transformer("foo")).toEqual("translation for foo");
    expect(transformer({})).toEqual({});
    expect(transformer([])).toEqual([]);
  });
});
