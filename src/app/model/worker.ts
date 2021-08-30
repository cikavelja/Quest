export class Worker {
    public constructor(init?: Partial<Worker>) {
      Object.assign(this, init);
    }
  
    id: number;
    name: string;
  }