'use strict';
function map_to_even(collection){
  let getDouble=(num)=>{
    return num*2
  }
  return collection.map(getDouble)
}
module.exports = map_to_even;
