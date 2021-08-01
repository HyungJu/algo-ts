import { Edge } from '../Edge';
import { Graph } from '../Graph';
import { Stack } from '../Stack';

export function dfs_rec(node: number, graph: Graph, visited: boolean[] = []) {
  console.log(node);

  visited[node] = true;
  for (const edge of graph.get(node)) {
    if (visited[edge.v]) continue;
    dfs_rec(edge.v, graph, visited);
  }
}

export function dfs(start: number, graph: Graph) {
  const s: Stack<number> = new Stack<number>();
  const visited: boolean[] = new Array<boolean>();

  s.push(start);
  visited[start] = true;

  while (!s.empty()) {
    const front = s.pop();
    console.log(front);

    for (const edge of Edge.sortEdgesAscByV(graph.get(front))) {
      if (!visited[edge.v]) {
        s.push(edge.v);
        visited[edge.v] = true;
      }
    }
  }
}

export function dfsv2(start: number, graph: Graph) {
  const s: Stack<number> = new Stack<number>();
  const visited: boolean[] = new Array<boolean>();

  s.push(start);
  visited[start] = true;
  console.log(start);

  while (!s.empty()) {
    const top: number = s.top();
    const children = Edge.sortEdgesAscByV(graph.get(top));

    if (isTerminated(top, graph, visited)) s.pop();

    for (const child of children) {
      if (!visited[child.v]) {
        s.push(child.v);
        visited[child.v] = true;
        console.log(child.v);
        break;
      }
    }
  }
}

function isTerminated(x: number, graph: Graph, visited: boolean[]) {
  const children = graph.get(x);
  for (const child of children) {
    if (!visited[child.v]) return false;
  }

  return true;
}
