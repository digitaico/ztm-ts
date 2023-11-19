type Name = string;
type Value = number;

const testValues: Map<string, number> = new Map();
const testValues2: Map<Name, Value> = new Map();

testValues2.set('Jordan', 97);
testValues2.set('Seth', 250);
testValues.set('anything', 1);
testValues2.set('Joe', 105);
testValues2.set('Phoebe', 77);
testValues2.set('kathe', 915);

testValues2.delete('Seth');
console.log(testValues2.has('Joe'));
console.log(testValues2.has('Bobby'));
console.warn(`map 2 size is ${testValues2.size}`);

for (const [name, value] of testValues2) {
  console.log(`My name is ${name} and my net worth is ${value}`);
}

for (const name of testValues2.keys()) {
  console.log(`My name is ${name} `);
}
for (const value of testValues2.values()) {
  console.log(`My net worth is ${value}`);
}

testValues2.clear();
console.warn(`map 2 size is ${testValues2.size}`);
