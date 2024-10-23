let makeArray = (firstArray, secondArray, maxLenght) =>{
    let newArr = firstArray.concat(secondArray);
    if (newArr.length > maxLenght){
        return newArr.slice(0, maxLenght);
    }
    return newArr;
}