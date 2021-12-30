let collection = [1,2,3,4]
let obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4
}

function myEach(collection, callback) {
    for(let num in collection) {
        callback(collection[num])
    }
    // console.log(collection, callback);
    return collection;    
}


function myMap(collection, callback) {
    let newArray = []
    for(let num in collection) {
        newArray.push(callback(collection[num]))
    };
    // console.log('newArray: ', newArray);
    return newArray;
}

function myReduce(collection, callback, acc) {
    
    let copy = [...collection] //make a copy of collection so we can modify
    console.log('acc: ', acc);
    console.log('collection: ', copy);
    
    acc = acc || copy.shift(); //accumulator either equal the given acc, or || 
    console.log('acc: ', acc);
    console.log('collection: ', copy);
    for(let num in copy) {
        acc = callback(acc, copy[num], copy)
        console.log('acc: ', acc);
        console.log('collection: ', copy);
    }
    return acc;
}

function myFind(collection, callback) { //take in collection and callback(aka predicate)
    for(let num in collection) {    //loop each number in array
        let element = collection[num] //assign element to each number
        if(callback(element)) { //if one of our looped numbers equals the callback parameter, stop search and return element
            return element; //return that number.  If is doesn't find it, the callback will return undefined    
        }
    }
}

function myFilter(collection, callback) {   //take in collection and callback(aka predicate)
    let newArray = []
    for(let num in collection) {    //loop each number in array
        let element = collection[num] //assign element to each number
        if(callback(element)) { //if any of our looped numbers meet criteria of callback
        newArray.push(element) //return the newArray containing element(s)
        }
    }
    return newArray; //the array will have aggregated several matches, so we want to return the end product
}

function mySize(collection) { //take in collection
    return Object.keys(collection).length //since arrays are objects, we treat this as on object rather than just array
}

function myFirst(collection, n = 1) {   //take in collection and first # of elements assigned by n
    let count = 1;  //start at 1, count each index as a single #, therefore 0 index = 1
    let array = []; //empty array to push results
    for(let num in collection){ //loop thru array
        if (count <= n) {   //if the # of values is <= to n, we keep counting
            array.push(collection[num]);    //we push those values into empty array
            count ++;   //increment the counter
        }
        
    }
    return array.length > 1 ? array : array[0]  //if the return is greater than 1, return that #, return index 0
}

function myLast(collection, n = 1) { //take in collection and first element
  let startingElement = collection.length - n;  //let our starting point = the end of the array, the depth is n
  return n > 1 ? collection.slice(startingElement, collection.length)  //if n > 1, return the starting point(depth) thru the end of array
   : collection[startingElement]    //if previous is not true, then return the last element in the array
}

function myKeys(obj){
    let newArray = []
    for(let key in obj){
        newArray.push(key)
    }
    return newArray  
}

function myValues (obj) {
    let newArray = []
    for (const key in obj) {
      if  (obj.hasOwnProperty(key)) {
          const value = obj[key];
          newArray.push(value)
      }
    }
    return newArray
  }