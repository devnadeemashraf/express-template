const zodErrorMessage = {
  invalidType: function (key: string, expected: string) {
    return `Invalid Type - ${key} should be a ${expected}`;
  },
  minimumLength: function (key: string, length: number) {
    return `Invalid Length - ${key} should have at least ${length} characters`;
  },
};

export default zodErrorMessage;
