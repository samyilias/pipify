const validate = (list) => {
    if (list.some((item) => typeof item !== "function")) {
      throw new Error("pipe argument must be a function,make sure all array items provided to pipe(array) are functions!");
    }

    if (list.length === 0) throw new Error("Array should not be empty");
  };

  export const pipe = (funcs) => {
    validate(funcs);

    return funcs.reduce((acc, curr) => {
      return (data) => {
        if (!data) {
          throw new Error("pipe factory function should be called with an argument");
        }
        return curr(acc(data));
      };
    });
  };

  export default pipe;
