export class Heap {
  public arr: HeapPayload[] = [];

  public getLeftChildIndex(index: number): number {
    return index * 2;
  }

  public getRightChildIndex(index: number): number {
    return index * 2 + 1;
  }

  public getSmallestChildIndex(index: number): number {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    const leftChildValue = this.arr[leftChildIndex];
    const rightChildValue = this.arr[rightChildIndex];

    if (leftChildValue > rightChildValue) return rightChildIndex;
    else return leftChildIndex;
  }

  public getParentIndex(index: number): number {
    return index == 1 ? 0 : Math.round(index / 2);
  }

  public add(value: HeapPayload) {
    this.arr.push(value);
    this.makeHeapOK();
  }

  public remove(): HeapPayload | boolean {
    if (this.arr.length == 1) {
      const top = this.arr[0];

      this.arr = [];
      return top;
    }

    const top = this.arr[0];

    const last = this.arr.pop();
    if (!last) return false;

    this.arr[0] = last;

    let index = 0;

    while (index <= this.arr.length - 1) {
      const smallestChildIndex = this.getSmallestChildIndex(index);

      if (this.arr[smallestChildIndex].value < this.arr[index].value) {
        const temp = this.arr[smallestChildIndex];
        this.arr[smallestChildIndex] = this.arr[index];
        this.arr[index] = temp;

        index = smallestChildIndex;
      } else break;
    }

    return top;
  }

  private makeHeapOK() {
    let index = this.arr.length - 1;

    const lastInsertedNode = this.arr[index];

    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      const parent = this.arr[parentIndex];

      if (parent.value > lastInsertedNode.value) {
        this.arr[this.getParentIndex(index)] = lastInsertedNode;
        this.arr[index] = parent;

        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

export class HeapPayload {
  key!: number;
  value!: number;
}
