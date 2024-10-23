function filterArray(numbers, value){
    let resultArr= [];

    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] > value){
            resultArr.push(numbers[i]);
        }
    }
    
    return resultArr;
}