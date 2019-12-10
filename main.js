const Node = (value) => {
  return {
    value,
    next: null
  }
}

const Lil = () => {
  return {
    head: null,
    values: function() {
        let newArray = []
        let current = this.head;
        while(current !== null){
          newArray.push(current.value);
          current = current.next;
      }

      return newArray;
    },

    addToStart: function(value) {
        let obj = Node(value);
        let current = this.head;

        if(current === null) {
          this.head = obj;
        } else if (current !== null) {
          obj.next = current;
          this.head = obj;
        }

      return this;

    },
    
    addToEnd: function(value) {
      if(this.head === null){
        this.head = Node(value)

        return;
      }

      let current = this.head;

      while (current.next !== null){
        current = current.next;
      }

      current.next = Node(value);
    },
    
    removeFromStart: function() {
      const toBeRemoved = this.head.value;
      this.head = this.head.next;

      return toBeRemoved;
    },

    removeFromEnd: function() {
      let current = this.head;
      let previous = null;

      while(current.next !== null) {
        previous = current;
        current = current.next;
      }

      const toBeRemoved = current.value
      previous.next = null;

      return toBeRemoved;
    },
    
    getAt: function(i) {
      if(this.head === null) {
        return null;
      }
      
      let count = 0;
      let current = this.head;

      while(count < 1) {
        current = current.next;
        count++;
      }

      return current.value;
      
    },

    removeAt: function(i) {
      if(this.head === null) {
        return null;
      }
      
      let count = 0;
      let current = this.head;

      while(count < i - 1) {
        current = current.next;
        count++;
      }

      
      return toBeRemoved = current.next.value;
      current.next = current.next.next;

      return toBeRemoved;
    },
  }
}

const test = Lil()

const result = test.head
result;

module.exports = {
  Lil,
  Node,
}


