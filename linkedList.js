/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
var linkedListGenerator = function (){
  var linkedList = {value : null , next : null};
  return {
    getHead : function(){
      return this.head;
    },
    getTail : function(){
      return this.tail;
    },
    add : function(entry){
      if(this.head === null){
        this.head = {value : entry, next : this.tail};
        this.tail = this.head;
        return this.head;
      }
      else {
        var penultimate = this.tail;
        this.tail = {};
        this.tail.value = entry;
        this.tail.next = null;
        penultimate.next = this.tail;
        return this.tail;
      }
    },
    get : function(number){
      var counter = -1;
      var nextObject;
      var thisObject;
      var iterate = function(object){
        counter++;
        thisObject = object;
        if(thisObject){
          nextObject = thisObject.next;
          if(counter < number){
            return iterate(nextObject);
          } else if(counter === number){
            return thisObject;
          }
        } else return false;
      }
      return  iterate(this.head);
    },
    remove : function(number){
      var counter = -1;
      var nextObject;
      var thisObject;
      var previousObject;
      var iterate = function(object){
        counter++;
        thisObject = object;
        //console.log('thisObject',thisObject)
        if(thisObject){
          nextObject = thisObject.next;
          if(counter < number){
            previousObject = object;
            return iterate(nextObject);
          } else if(counter === number){
            if(previousObject){
              previousObject.next = nextObject;
            } else { this.head = nextObject; }
          }
        } else thisObject = false;
      };
      iterate(this.head);
      console.log('thisObject',thisObject)
      if(!thisObject.next){
        this.tail = previousObject;
      } else if(!nextObject.next){
        this.tail = nextObject
      }
      if(number === 0){
      this.head = nextObject;
      }
      return thisObject;
    },
    insert : function(value,number){
      var counter = 0;
      var thisObject = this.head;
      var nextObject = this.head.next;
      var previousObject;
      var newObject = {};
      newObject.value = value;
      newObject.next = null;
      while (number !== counter){
        if(thisObject){
          previousObject = thisObject;
          thisObject = thisObject.next;
          if(thisObject){
            nextObject = thisObject.next || null;
          }
        } else return false;
        counter++;
      }
      newObject.next = thisObject;
      if(!previousObject){
        this.head = newObject;
      } else if(!thisObject){
        previousObject.next = newObject;
        this.tail = newObject;
      } else previousObject.next = newObject;
    },
    head : null,
    tail : null
  };

}