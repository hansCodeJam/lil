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
        const obj = Node(value);
        const current = this.head;

        if(current === null) {
          this.head = obj;
        } else if (current !== null) {
          obj.next = current;
          this.head = obj;
        }

      return this;

    },
    
    addToEnd: function(value) {
      let obj = Node(value);
      let current = this.head;
      
      if(current !== null) {
        current = obj;
      } 
    },
    
    removeFromStart: function() {
      const current = this.head;
      this.head = current.next;
      return current.value;
    },

    removeFromEnd: function() {
    
    },
    
    getAt: function(i) {
      
    },

    removeAt: function(i) {
    
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


