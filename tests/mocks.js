describe("fun with mocks", function () {
  it("should return null", function () {
    const numbers = [1, 2];

    const mock = jest.fn();

    const results = add(numbers, mock);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(2);

    const anotherMock = jest.fn();
    anotherMock("foo");
    expect(anotherMock).toHaveBeenCalledWith("foo");
  });

  it('should return "fail" if code is 500', function () {
    const mock = jest.fn(() => 500);

    const response = mock();

    expect(respond(response)).toBe("fail");
  });
});

function add(numbers, cb) {
  // invoking the callback for each number in the array
  numbers.forEach((n) => cb(n));
}

function respond(code) {
  return code === 500 ? "fail" : "pass";
}
