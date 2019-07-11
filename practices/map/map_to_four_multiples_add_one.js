'use strict';
var map_to_four_multiples_add_one = function(collection){
  let getDouble=(num)=>{
      return num*4+1
    }
    return collection.map(getDouble)
};

module.exports = map_to_four_multiples_add_one;
