const courseName: string = 'typescript on ZTM';
const yes: boolean = true;
const myName: string = 'Dwigth Eisenhower';
const valor: number = 5321563;
const f: Function = (message: string): string => {
  return message;
};

function product(a: number, b: number): number {
  return a * b;
}

interface TestType {
  value: string;
  x: number;
  t: () => Promise<any>;
}

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
