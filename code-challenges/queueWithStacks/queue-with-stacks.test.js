class Stack {
    constructor () {
        this.storage=[];
    }

    push(value){
        return this.storage.unshift(value)
    }

    pop() {
        return this.storage.shift()
    }

    peek() {
        return this.storage.length ? this.storage[0] : null;
    }

}

class PseudoQueue {
    constructor(stack1 = new Stack(), stack2 = new Stack()) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }

    enqueue(value) {
        this.stack1.storage.forEach(idx => {
            this.stack2.storage.push(idx)
        })
        this.stack2.storage.push(value)
    }

    dequeue() {
        this.stack1.storage.push(this.stack2.storage.pop())
        return this.stack1.storage[0]
    }

}

//Tests 

describe('PseudoQueue', () => {
    describe('Enqueue', () => {
        const testQueue = new PseudoQueue();
        testQueue.stack1.storage = [5, 10, 15]
        testQueue.enqueue(20)
        it('Add value to the end of pseudoQueue', () =>{
            expect(testQueue.stack2.storage).toEqual([5, 10, 15, 20])
        })
    })
    describe('Dequeue', () => {
        const testQueue = new PseudoQueue();
        testQueue.enqueue(5)
        testQueue.enqueue(10)
        testQueue.enqueue(15)

        it('Remove value from the end of pseudoQueue and return the value that is popped off', ()=> {
            expect(testQueue.dequeue()).toEqual(15);
            expect(testQueue.stack1.storage).toEqual([15])
            expect(testQueue.stack2.storage).toEqual([5, 10])
        })
    })
})