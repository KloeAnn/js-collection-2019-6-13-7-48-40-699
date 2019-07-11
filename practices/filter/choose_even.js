'use strict';

function choose_even(collection) {

  let checkOdd=(num)=>{
    return num%2==0
  }

  let res=collection.filter(checkOdd)
  return res
}

module.exports = choose_even;
