//  Using PROMPT ask user what does he want to do  (+ - / *). Ask until then
//  he will put correct answer.

//   -Asking how much operands does he want to use. It should be a NUMBER
//   more then 1 and less then 7. Ask until then he will put correct answer.
// -  Asking every operand in user. It should be a NUMBER. Ask until then he
//   will put correct answer.
// -  Using ALERT or console.log display final result of action (+ - / *).


let secret = '';
let operand = 0;
let el = null;
let res = el;
inc = 0;


while (secret !== "+" && secret !== "-" && secret !== '/' && secret !== '*') {
    secret = prompt(" 1) What is your ACTION ?",);
    console.log(secret)
}
while (operand < 2 || operand > 7) {
    operand = parseInt(prompt(" 2) How much operands ", "3"));
    console.log(operand)
}

while (inc < operand) {
    while (!el && el !== 0) {
        let el2 = prompt(`Value # ${inc + 1}: `);
        el = parseFloat(el2);
        console.log(el)
    }
    switch (secret) {
        case '+': {
            res = res + el;
            break;
        }
        case '-': {
            if (res === null && el !== null) {
                res = 0;
                res = (el - res);

            } else {
                res = res - el;
            }
            break;
        }
        case '*': {
            if (el === 0) {
                res = 0;
            } else if (res === null && el !== null) {
                res = 1;
                res = res * el;
            } else {
                res = res * el;

            }
            break;
        }
        case '/': {
            if (el === 0) {
                alert("impossible to divide");
                continue;
            } else if (el !== 0 && res === null) {
                res = el;
            } else {
                res = res / el;
            }
            break;
        }
        default: {
            console.log("There is no other options");
            break;
        }
    }
    el = null;
    inc++;
}
alert(`Result is: ${res}`);

