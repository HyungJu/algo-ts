import { Graph } from '../Graph';

import { Heap, HeapPayload } from './heap';

export function dijkstra(start: number, graph: Graph) {
  const d: number[] = [];
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

    const shortest = heap.remove();
    if (shortest == false) break;

    currentNode = (shortest as HeapPayload).key;
  }

  console.log(d);
}

//우선순위 큐에서 꺼낼때 왜 방문 여부를 확인 안해도 될까 ??
