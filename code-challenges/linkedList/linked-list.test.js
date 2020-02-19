class Node {
    constructor (value, next) {
       this.value = value;
       this.next = null;
    }
  }
  


class LinkedList { 
    constructor() { 
        this.head = null;
    }
      
    insert(val){
        let node = new Node(val)
        if(!this.head) {
            this.head = node;
          } else {
          let oldHead = this.head;
          this.head = node;
          this.head.next = oldHead;
          }
        }
    includes(val){
        let current = this.head
        while (current !== null) {
            if(current.value === val) {
                return true
            } else {
            current = current.next
            }
        } 
        return false 
    }

    toString() {
        if (this.head !== null) {
            let string = '';
            let current = this.head
            while (current.next !== null) {
                string = `${string} {${current.value}} ->`;
                current = current.next;
            }
         return `${string} null`;
        }
    }

    append(value) {
        let node = new Node(value, null);
        if (!this.head) {
          this.head = node;
          return;
        }
        let current = this.head;
        while (current.next != null) {
          current = current.next
        }
        current.next = node;
      }

    insertBefore(value, newVal) {
        let current = this.head;
        while(current.next !== null) {
          if(current.next.value == value){
            let node = new Node(newVal)
            node.next = current.next;
            current.next = node
            return
          }
          current = current.next
        }
    }

    insertAfter(value, newVal) {
        let current = this.head;
        while(current.value !== null) {
          if(current.value == value){
            let node = new Node(newVal)
            current.next = node;
            return
          }
          current = current.next
        }
    }
}
////Tests////

jest.spyOn(global.console, 'log')

describe ('testing Linked List' , () => {
    it('Successfully instantiant an emply linked list',() => {
        let list = new LinkedList();
        expect(list.head).toStrictEqual(null)
    })

    it('Can property insert into the linked list', () => {
        let list = new LinkedList();
            list.insert(5)
            expect(list.head.value).toEqual(5)
    })
    it('Head property will point to the first node in the linked list', () => {
        let list = new LinkedList();
        list.insert(2);
        expect(list.head.value).toEqual(2)
    })

    it('Will return true when finding value within the link list that exists', () => {
        let list = new LinkedList();
        for(let i=0; i < 10; i++) {
            list.insert(i)
            expect(list.includes(i)).toBeTruthy();
        }
    })

    it('Can properly insert multiple nodes', () => {
        let list = new LinkedList();
        for(let i = 0; i < 10; i++) {
            list.insert(i)
            expect((list.head.value)).toEqual(i)
        }
    })

    it('Will return false when finding a value in the linked list that does NOT exist', () => {
        let list = new LinkedList();
        for(let i=0; i < 10; i++) {
            list.insert(i);
            expect(list.includes(15)).toBeFalsy();
        }
    })

    it('Can properly return a collection o all the values that exist in the linked list', () => {
        let list = new LinkedList();
        for(let i=0; i < 5; i++) {
            list.insert(i)
        }
        expect(list.toString()).toEqual(' {4} -> {3} -> {2} -> {1} -> null')
    })
    // it('Can properly append value to end', () => {
    //     let list = new LinkedList();
    //     list.insert(1);
    //     list.append(2);
    //     expect(list.next).toEqual(2)
    // })


})
