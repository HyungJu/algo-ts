export class Edge {
  constructor(public u: number, public v: number, public w: number = 1) {}
  compareWeigh(edge: Edge): number {
    if (edge.w < this.w) return 1;
    else if (edge.w == this.w) return 0;
    else return -1;
  }

  static sortEdgesAscByV(edges: Edge[]): Edge[] {
    return edges.sort((a, b) => {
      if (a.v > b.v) return 1;
      else if (a.v < b.v) return -1;
      else return 0;
    });
  }
}
