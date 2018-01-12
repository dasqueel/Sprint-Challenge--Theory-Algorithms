const a = (n) => {
    let steps = 0;
    let a = 0;
    while (a < n * n * n) {
        a = a + n * n;
        steps++;
    }
    console.log(steps);
}

// a(1000);

const b = (arr) => {
    let steps = 0;
    let i = arr.lenth - 1;

    while (array[i] > x && i >= 0) {
        i = i / 2;
        steps++;
    }
    console.log(steps);
}

// b([1,2,3,4,5,6,7,8,9,10]);

const c = (n) => {
    let steps = 0;
    let sum = 0;

    for(let i = 0; i < Math.sqrt(n) / 2; i++) {
        for(let j = i; j < 8 + i; j++) {
            for(let k = j; k < 8 + j; k++)
                sum++;
                steps++;
        }
    }

    console.log(steps);
}

// c(100000);

const d = (n) => {
    let steps = 0;
    let sum = 0;

    for(let i = 1; i < n; i *= 2) {
        for(let j = 0; j < n; j++) {
            sum++;
            steps++;
        }
    }

    console.log(steps);
}

// d(100000000);

const e = (n) => {
    let steps = 0;
    let sum = 0;

    for(let i = 0; i < n; i++) {
        steps++;
        for(let j = i + 1; j < n; j++) {
            steps++;
            for(let k = j + i; k < n; k++) {
                steps++;
                for(let l = k + 1; l < 10; l++) {
                    sum++;
                    steps++;
                }
            }
        }
    }

    console.log(steps);
}

// e(300);

// have to use a closure to keep track of the steps taken
const bunnyEars = (bunnies) => {
    let steps = 0;
    if (bunnies === 0) {
        console.log(steps);
        return 0;
    }
    steps++;
    return 2 + bunnyEars(bunnies -1);
}

// bunnyEars(8);

const searchWrapper = (array, arraySize, target) => {
    let steps = 0;
    const search = () => {
        if (arraySize > 0) {
            steps++;
            if (array[arraySize - 1] === target) return true;
            else return search(array, arraySize - 1, target);
        }
        // console.log(steps);
        return false;
    }
    console.log(steps);
    return search
}

// searchWrapper([1,2,3,4,5,6], 6, 6)
// answer to 2a)

const linearFindMax = (arr, i , j) => {
    let max = arr[i];
    for(let c = i + 1; c <= j; c++) {
        if (max < arr[c]) {
            max = arr[c];
        }
    }
    return max;
}

// console.log(linearFindMax([23,523,23,52,2,5,2,547,2342346,4444,23], 3, 8))

