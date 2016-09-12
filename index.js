const co = require('co');


function recursion(object){
  let array = [];
  for(let i in object){
    let entry = object[i];
    if (Object.getPrototypeOf(entry) === Object.prototype) {
      let subArr = recursion(entry);
      array.push(subArr);
    }else{
      array.push(object[i]);
    }
  }
  return array;
}

module.exports = function(object){
  // console.log(object);
  if (Object.getPrototypeOf( object ) != Object.prototype) {
    return reject('Object-values only accepts object as argument!');
  }
  let array = recursion(object);
  return array;

}
