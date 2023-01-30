const averageCalc = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].clouds;
    }
    let average = total/array.length;
    return average;
}

export { averageCalc };