// Iterative Fibonacci

function fibs(n) {
    if (n === 0) return [] ;
    if (n === 1) return [0];

    const fibSeq = [0, 1];

    for (let i = 2; i < n; i++) {

        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }

    return fibSeq;
}

// Recursive Fibonacci

function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    function fib(k) {
        if (k <= 1) return k;
        return fib(k - 1) + fib(k - 2);
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]