import { randomInt } from 'node:crypto';
import { RunnerModel } from './interfaces';

export class Runer implements RunnerModel {
  // [ attributes ]
  id: number;
  gender: string;
  name: string;
  averageSpeed: number | string = 0.0;
  status: boolean = true;

  constructor(gender: string, name: string) {
    this.id = randomInt(1);
    this.gender = gender;
    this.name = name;
  }

  // [ methods]
  run = (id: number) => {
    console.log(`Good! the runer with ${id} is running!`);
  };
}
