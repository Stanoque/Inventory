function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    let firstObj = {}, secondObj = {}; // object to represent inventory arrays
    let resultArr = []; // array to return

    for(let element of arr1){ // forming an object out of arr1
        firstObj[element[1]] = element[0];
    }

    for(let element of arr2){ // forming an object out of arr2
        secondObj[element[1]] = element[0];
    }
    
    for(let property in secondObj){  // going through all properties in second object
        if(firstObj.hasOwnProperty(property)){ // if there is such property in first object
            firstObj[property]+=secondObj[property]; // sum up with value from the second object
        }
        else{
            firstObj[property]=secondObj[property]; // otherwise form up a new entry equal to such in second object
        }
    }

    for (let [key, value] of Object.entries(firstObj)) { // forming an array from the object
       resultArr.push([value, key]);
    }

    resultArr.sort((x,y) => x[1].charCodeAt(0) - y[1].charCodeAt(0)); // sorting in alphabetical order
    
    return resultArr;
}