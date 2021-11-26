// Starting array
let array = [0, 28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let addToZero = false;

loop1:
for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
        if(array[i] + array[j] === 0 && array[i] !== array[j])
        {
            addToZero = true;
            break loop1;
        }
    }
}

console.log(addToZero);

