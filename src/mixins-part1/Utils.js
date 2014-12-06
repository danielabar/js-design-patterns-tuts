module.exports = {

  speaker: {
    speak: function() {
      return this.name + ' is speaking';
    }
  },

  mover: {
    walk: function() {
      return this.name + ' is walking';
    },
    run: function() {
      return this.name + ' is running';
    }
  },

  arithmetic: {
    add: function() {
      return this.name + ' is adding numbers together';
    },
    multiply: function() {
      return this.name + ' is multiplying numbers together';
    }
  }

};