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
        let previous = null;

        if(obj !== previous) {
          current.value; 
        } 

        

    },

    addToEnd: function(value) {
      let obj = Node();
      let current = this.head;
      let previous = null;

      if(obj !== null) {

      }

    },

    removeFromStart: function() {
    
    },

    removeFromEnd: function() {
    
    },

    getAt: function(i) {
    
    },

    removeAt: function(i) {
    
    },
  }
}


module.exports = {
  Lil,
  Node,
}