import { Graph } from '../Graph';

import { Heap, HeapPayload } from './heap';

export function dijkstra(start: number, graph: Graph) {
  const d: number[] = [];
  const visited: boolean[] = [];
  const heap: Heap = new Heap();

  for (let i = 1; i < graph.getMaxNode(); i++) {
    if (i != start) d[i] = Infinity;
    else d[i] = 0;
  }
  let currentNode: number = start;

  while (true) {
    for (const edge of graph.get(currentNode)) {
      if (d[edge.v] > d[currentNode] + edge.w) {
        d[edge.v] = d[currentNode] + edge.w;

        heap.add({
          key: edge.v,
          value: d[currentNode] + edge.w,
        });
      }
    }
    visited[currentNode] = true;

    const shortest = heap.remove();
    if (shortest == false) break;

    currentNode = (shortest as HeapPayload).key;
  }

  console.log(d);
}

function findShortestUnvisitedNode(
  d: number[],
  start: number,
  visited: boolean[]
): boolean | number {
  const unvisited = d
    .map((n, i) => ({ index: i, n: n }))
    .filter((v, i) => !visited[i] && i != start);

  if (unvisited.length == 0) return false;

  const sorted = unvisited.sort((a, b) => {
    if (a.n > b.n) return 1;
    else if (a.n < b.n) return -1;
    else return 0;
  });

  console.log(sorted);
  return sorted[0].index;
}
