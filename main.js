const Node = (value) => {
  return {
    value,
    next: null
  }
}

const Lil = () => {
  return {
    head: '',
    values: function() {
    return Node.next.value
    },

    addToStart: function(value) {
      
    },

    addToEnd: function(value) {
    
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