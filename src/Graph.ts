import { Edge } from './Edge';

export class Graph {
  constructor(private parents: number[]) {}
  public edges: Edge[] = [];
  private maxNode = 0;

  public push(edge: Edge) {
    this.edges.push(edge);
    this.parents[edge.u] = edge.u;
    if (edge.u > this.maxNode) this.maxNode = edge.u;
    if (edge.w > this.maxNode) this.maxNode = edge.w;
  }

  public addEdge(u: number, v: number, w: number) {
    const edge = new Edge(u, v, w);
    this.push(edge);
  }

  public getMaxNode(): number {
    return this.maxNode;
  }

  public get(x: number): Edge[] {
    return this.edges.filter((e) => {
      return e.u == x;
    });
  }
}
