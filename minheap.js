class MinHeap {
    constructor() {
        this.heap = [];
    }

    peek() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }

    pop() {
        this.swap(0, this.heap.length - 1)
        const min = this.heap.pop()
        this.heapifyDown(0)
        return min
    }

    peek() {
        return this.heap[0]
    }

    length() {
        return this.heap.length
    }

    heapifyUp(i) {
        parent = Math.floor((i - 1) / 2)
        if ((parent >= 0) && this.heap[parent].endDate > this.heap[i].endDate) {
            this.swap(parent, i)
            this.heapifyUp(parent)
        }
    }

    swap(f, l){
        const temp = this.heap[f]
        this.heap[f] = this.heap[l]
        this.heap[l] = temp
    }

    heapifyDown(i) {
        const l = 2*i + 1
        const r = 2*i + 2
        if (l < this.heap.length && this.heap[l].endDate < this.heap[i].endDate){
            this.swap(l, i)
            this.heapifyDown(l)
        } else if (r < this.heap.length && this.heap[r].endDate < this.heap[i].endDate){
            this.swap(r, i)
            this.heapifyDown(r)
        }
    }
} export default MinHeap;