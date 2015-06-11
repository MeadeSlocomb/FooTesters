window.Foo = (function() {

  function Foo() {
    this.plusOne = function(x){
      return x + 1;
    };

  }

  Foo.prototype.sortArray = function(array){
    var tempArray = array.slice();
    return tempArray.sort();
  };

  Foo.prototype.hasValue = function(array, material){
    var output = false;
    array.forEach(function(x){
      if(x == material) {
        output = true;
      }
    });
    return output;
  };

  Foo.greet = function(name){
    var output = "Hello, " + name + "!";
    return output;
  };



  return Foo;

})();
