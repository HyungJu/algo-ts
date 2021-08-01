import { Graph } from '../Graph';
import { Queue } from '../Queue';

export function bfs(start: number, graph: Graph) {
  const q: Queue<number> = new Queue<number>();
  const visited: boolean[] = new Array<boolean>();

  q.push(start);
  visited[start] = true;

  while (!q.empty()) {
    const front = q.front();
    q.pop();
    console.log(front);

    for (const edge of graph.get(front))
      if (!visited[edge.v]) {
        q.push(edge.v);
        visited[edge.v] = true;
      }
  }
}
