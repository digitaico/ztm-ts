export interface RunnerModel {
  id: number;
  gender: string;
  name: string;
  status: boolean;
  averageSpeed: number | string;
  run(id: number): void;
}
