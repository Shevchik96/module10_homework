let arr = ['1', '2', '3', '4', '5', '6', '7', '8'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("Элменты в массиве одинаковые");
} else {
    console.log("Элменты в массиве не одинаковые");
}