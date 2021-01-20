const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, func) {
      if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
          func(coll[i], i, coll)
        }
      } else {
        for (let key in coll) {
          func(coll[key], key, coll)
        }
      }  
      return coll
    },

    map: function(coll, func) {
      let arr = []
      if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
          arr.push(func(coll[i], i, coll))
        }
        return arr
      } else {
        for (let key in coll) {
          arr.push(func(coll[key], key, coll))
        }
      }
      return arr
    },

    reduce: function(coll, func, acc) {
      let i
      if (!!acc) {
        i = 0
      } else {
        i = 1
        acc = coll[0]
      }
      for (; i < coll.length; i++) {
        acc = func(acc, coll[i], coll)
      }
      return acc
    },

    find: function(coll, func) {
      for (let i = 0; i < coll.length; i++) {
        if (func(coll[i])) {
          return coll[i]
        }
      }
    },

    filter: function(coll, func) {
      let outArr = []
      for (let i = 0; i < coll.length; i++) {
        if (func(coll[i])) {
          outArr.push(coll[i])
        }
      }
      return outArr
    },

    size: function(coll) {
      if (Array.isArray(coll)) {
        return coll.length
      } else {
        return Object.keys(coll).length
      }
      
    },

    first: function(coll, num) {
      return !num ? coll[0] : coll.slice(0, num)
    },

    last: function(coll, num) {
      return !num ? coll[coll.length - 1] : coll.slice(-num)
    },

    compact: function(coll) {
      let outArr = []
      for (let i = 0; i < coll.length; i++) {
        if (!!coll[i]) {
          outArr.push(coll[i])
        }
      }
      return outArr
    },

    sortBy: function(array, callback) {
      let copyArray = [...array]
      return copyArray.sort((a, b) => callback(a) - callback(b))
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
