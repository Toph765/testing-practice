const isAllNum = (arr) => {
    let status = null;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") status = true;
        else return status = false;
    }

    return status;
}

const analyzeArray = (arr) => {
    if (!isAllNum(arr)) return "array should contain numbers";
    
    let average = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;

    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }

    average = average / length;

    return {
        average,
        min,
        max,
        length
    };
}

export { analyzeArray };