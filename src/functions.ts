const courseName: string = 'typescript on ZTM';
const yes: boolean = true;
const myName: string = 'Dwigth Eisenhower';
const valor: number = 5321563;
const f: Function = (message: string): string => {
  return message;
};

type Product = (a: number, b: number) => number;

// assign func to var
const product: Product = (a, b) => {
  return a * b;
};

// classic function and annotations.
function product2(a: number, b: number): number {
  return a * b;
}
// classic function with type annotation
function product3(): Product {
  return (a, b) => a * b;
}
// function interface
interface ProductType {
  (a: number, b: number): number;
}
const prod: ProductType = (a, b) => {
  return a * b;
};

// methods: an existing function executed in the context of an object.

interface TestType {
  value: string;
  x: number;
  t?: (a: number, b: number) => Promise<any>;
  product(a: number, b: number): number; // product is the method name
}

const data: TestType = {
  value: '52555',
  x: 156,
  product(a, b) {
    return a * b;
  },
};

interface Person {
  readonly basic: {
    gender: string;
    age: number;
    name: string;
  };
  status: boolean;
  occupation: string | number;
  sports: Array<string>;
}

const Juan: Person = {
  basic: {
    gender: 'Male',
    age: 30,
    name: 'Juan Macron Dauchamp',
  },
  status: false,
  occupation: 'Employee',
  sports: ['swim', 'run', 'mtb'],
};
