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
        let node = new Node(newVal)
        if (current.value === value) {
            this.insert(newVal)
        } else {
            while (current.next && current.next.value !== value) {
                current = current.next
            }
            current.next = node
        }
    }

    insertAfter(value, newVal) {
        let current = this.head;
        while(current.value !== null) {
          if(current.value === value){
            let node = new Node(newVal)
            current.next = node;
            return
          }
          current = current.next
        }
    }

    kthFromEnd(k) {
        let current = this.head
        const valArr = []
        while(current !== null) {
            valArr.unshift(current.value);
            current = current.next
        }
        if(k < valArr.length) {
            return valArr[k]
        } else {
            return 'exception'
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

    it('Can successfully add a node to the end of the linked list', () => {
        let list = new LinkedList();
        list.insert(5);
        list.insert(7);
        list.append(12);
        expect(list.head.next.next.value).toEqual(12);
    })

    it('Can successfully add multiple nodes to the end of a linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(7);
        list.append(12);
        expect(list.head.value).toEqual(5);
        expect(list.head.next.next.value).toEqual(12);
    })

    it('Can successfully insert a node before the first node of a linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(7);
        list.insertBefore(5, 12);
        expect(list.head.value).toEqual(12);
        expect(list.head.next.value).toEqual(5);
    })

    it('Can successfully insert after a node in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(10)
        list.append(7)
        list.insertBefore(7, 12);
        expect(list.head.value).toEqual(5);
        expect(list.head.next.next.value).toEqual(12);
    })

    it('Can successfully insert a node after the last node of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(7);
        list.append(12)
        list.insertAfter(12, 2);
        expect(list.head.next.next.next.value).toEqual(2);
      })
      it('Can successfully insert after a node in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append(5);
        list.append(7);
        list.append(12)
        list.insertAfter(5, 2);
        expect(list.head.next.value).toEqual(2);
      })


      it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let list = new LinkedList();
        list.append(5)
        list.append(7)
        list.append(12)
        expect(list.kthFromEnd(1)).toStrictEqual(7);
      })

      it('Where k is greater than the length of the linked list', () => {
          let list = new LinkedList();
          list.append(5)
          list.append(7)
          list.append(12)
          expect(list.kthFromEnd(5)).toBeFalsy
      })

      it('Where k and the length of the list are the same', () => {
        let list = new LinkedList();
        list.append(5)
        list.append(7)
        list.append(12)
        expect(list.kthFromEnd(3)).toBeFalsy
        console.log(list.kthFromEnd(3))
      })

      it('Where k is not a positive integer', () => {
        let list = new LinkedList();
        list.append(5)
        list.append(7)
        list.append(12)
        expect(list.kthFromEnd(-1)).toBeFalsy
      })

      it('Where the linked list is of a size 1', () => {
        let list = new LinkedList();
        list.append(5)
        expect(list.kthFromEnd(1)).toBeFalsy
      })

})
