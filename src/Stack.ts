export class Stack<T> {
  private arr: T[] = [];

  push(element: T): void {
    this.arr.push(element);
  }

  pop(): T {
    const element = this.arr.pop();
    if (!element) throw new Error('Empty Stack!');

    return element;
  }

  top(): T {
    return this.arr[this.arr.length - 1];
  }

  size(): number {
    return this.arr.length;
  }

  empty(): boolean {
    return this.arr.length == 0;
  }
}
