import { it, expect } from '@jest/globals';
import { sum, product, modulo, division } from './calculations';

it('should return 44 when sum 28 and 16', async () => {
  await expect(sum(28, 16)).resolves.toBe(44);
});

it('should return 125 when product of 5 and 25', async () => {
  await expect(product(5, 25)).resolves.toBe(125);
});

it('should return 1 when module of 25 amd 4', async () => {
  await expect(modulo(25, 4)).resolves.toBe(1);
});

it('should return error: divide by zero', async () => {
  await expect(() => {
    division(400, 0);
  });
});
