// insertion sort 

function sortte(arr) {
    for(let i = 1; i < arr.length ; i++) {
        let l = arr[i];
        for(let j = i; j > 0; j--) {
            if(l < arr[j-1]) {
                [arr[j-1],arr[j]] = [arr[j], arr[j-1]];
            }
        }
    }
    return arr;
}

console.log(sortte([8,5,7,3,2]))

