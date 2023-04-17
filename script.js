/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

const strangeCounter = (t) => {
    let cycle = 0;
    let time = 1;
    let val = 0;
    let initialNum = 3;
    
    while(time <= t) {
        val = (initialNum * Math.pow(2, cycle));
        if(time === t) return val;
        time += val;
        cycle++;
    }
    
    console.log(time - t);
    return time - t;
}
