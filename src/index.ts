import { Edge } from './Edge';
import { Graph } from './Graph';
import { dfs_rec } from './algorithms/dfs';
import { dijkstra } from './algorithms/dijkstra';

const graph = new Graph([]);

/*
graph.push(new Edge(1, 2));
graph.push(new Edge(2, 1));

graph.push(new Edge(1, 3));
graph.push(new Edge(3, 1));

graph.push(new Edge(2, 4));
graph.push(new Edge(4, 2));

graph.push(new Edge(2, 5));
graph.push(new Edge(5, 2));

graph.push(new Edge(4, 8));
graph.push(new Edge(8, 4));

graph.push(new Edge(5, 9));
graph.push(new Edge(9, 5));

graph.push(new Edge(3, 6));
graph.push(new Edge(6, 3));

graph.push(new Edge(3, 7));
graph.push(new Edge(7, 3));
*/

graph.push(new Edge(1, 3, 6));
graph.push(new Edge(1, 4, 3));
graph.push(new Edge(2, 1, 3));
graph.push(new Edge(3, 4, 2));
graph.push(new Edge(4, 2, 1));
graph.push(new Edge(4, 3, 1));
graph.push(new Edge(5, 2, 4));
graph.push(new Edge(5, 4, 2));
console.log(graph.edges);

dijkstra(5, graph);
