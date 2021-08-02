export class Graph2 {
  public arr: number[][] = [];
  private maxNode = 0;

  public push(from: number, to: number, w: number) {
    this.arr[from][to] = w;

    if (from > this.maxNode) this.maxNode = from;
    if (to > this.maxNode) this.maxNode = to;
  }

  public getMaxNode(): number {
    return this.maxNode;
  }

  public get(x: number): number[] {
    return this.arr[x];
  }
}
