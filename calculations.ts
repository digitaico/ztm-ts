const sum = async (a: number, b: number): Promise<number> => await (a + b);

const product = async (a: number, b: number): Promise<number> => await (a * b);

const modulo = async (a: number, b: number): Promise<number> => await (a % b);

const division = async (a: number, b: number): Promise<number> => {
  if (b === 0) {
    throw new Error('Cannot divide by Zero!!!');
  } else {
    return a / b;
  }
};

export { sum, product, modulo, division };
