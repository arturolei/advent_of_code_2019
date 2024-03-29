const rawData = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,19,10,23,1,23,13,27,1,6,27,31,1,9,31,35,2,10,35,39,1,39,6,43,1,6,43,47,2,13,47,51,1,51,6,55,2,6,55,59,2,59,6,63,2,63,13,67,1,5,67,71,2,9,71,75,1,5,75,79,1,5,79,83,1,83,6,87,1,87,6,91,1,91,5,95,2,10,95,99,1,5,99,103,1,10,103,107,1,107,9,111,2,111,10,115,1,115,9,119,1,13,119,123,1,123,9,127,1,5,127,131,2,13,131,135,1,9,135,139,1,2,139,143,1,13,143,0,99,2,0,14,0];

/*
Here are the initial and final states of a few more small programs:

1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).
2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).
2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.

*/

function Step(inputList) {
    let startPoint = 0;

    while (startPoint !== 99) {
        if (inputList[startPoint] === 1) {
            inputList[inputList[startPoint+3]] = inputList[inputList[startPoint+1]] + inputList[inputList[startPoint+2]];
        } else if (inputList[startPoint]=== 2) {
            inputList[inputList[startPoint+3]] = inputList[inputList[startPoint+1]] * inputList[inputList[startPoint+2]];
        }

        startPoint+=4;
    }


    return inputList;
}

//Test Runs
console.log(Step([1,0,0,0,99]));
console.log(Step([2,3,0,3,99]));
console.log(Step([2,4,4,5,99,0]));
console.log(Step([1,1,1,4,99,5,6,0,99]));
console.log(Step(rawData)[0]);


51176

1-888-745-0091