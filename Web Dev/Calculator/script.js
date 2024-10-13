window.onload = function() {
    if (window.innerWidth < 500) {
        document.getElementById("log").style.width = `${window.innerWidth * 0.73}px`;
    }
};

window.addEventListener('resize', function() {
    if (window.innerWidth < 500) {
        document.getElementById("log").style.width = `${window.innerWidth * 0.73}px`;
    }
});

var arr = [];
let sentence = '';

function disp(element) {
    document.getElementById('display').innerHTML = element
}

function app(x) {
    arr.push(x);
    sentence+=x
    disp(sentence);
}

function backspace() {
    arr.pop();
    let sentence2 = "";
    for (let i=0;i<(sentence.length-1);i++) {
        sentence2 += sentence[i]
    }
    sentence = sentence2
    console.log(sentence);
    disp(sentence);
}

function clear_button() {
    arr = [];
    sentence = '';
    disp('0');
}

function add_to_log(question,answer) {
    if (document.getElementById("log").innerHTML == "Empty") {
        document.getElementById("log").innerHTML = question + "=" + answer;
    }
    else if(question == answer) {
        return
    }
    else {
        document.getElementById("log").innerHTML += "<br>" + question + "=" + answer;
    }
}

function ch_log_disp() {
    if (document.getElementById("log").style.display != "none") {
        document.getElementById("log").style.display = "none";
        document.getElementById("log_bt2").id = "log_bt1";
    }
    else {
        document.getElementById("log").style.display = "block";
        document.getElementById("log_bt1").id = "log_bt2";
    }
}

function precedence(op) {
    if (op === '+' || op === '-') return 1;
    if (op === 'x' || op === '÷') return 2;
    if (op === '²' || op === '√' || op === '⅟' || op === '~') return 3;
    return 0;
}

function applyOp(num1, num2, oper) {
    if (oper==undefined) {
        return num1
    }
    switch (oper) {
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case 'x':
            return num1*num2;
        case '÷':
            return num1/num2;
        case '⅟':
            return num1 + 1/num2;
        case '²':
            if (isNaN(num2))
                return num1*num1
            else
                return num1*num1*num2;
        case '√':
            if (isNaN(num1))
                return Math.sqrt(num2);
            else
                return num1*Math.sqrt(num2);
        case '~':
            if (num1!=0)
                return num1*(~num2)
            else
                return ~num2
        default:
            console.log("Operant doesn't exist");
            alert("Operant doesn't exist");
            return ;
        }
}

function evaluate(expression) {
    let values = [];
    let ops = [];
    let i = 0;

    while (i < expression.length) {
        if (expression[i] === ' ') {
            i++;
            continue;
        }

        if (!isNaN(expression[i]) || expression[i] === '.') {
            let val = '';
            while (i < expression.length && (!isNaN(expression[i]) || expression[i] === '.')) {
                val += expression[i];
                i++;
            }
            values.push(parseFloat(val));
            i--;
        } else {
            while (ops.length && precedence(ops[ops.length - 1]) >= precedence(expression[i])) {
                let val2 = values.pop();
                let val1 = values.pop();
                let op = ops.pop();
                values.push(applyOp(val1, val2, op));
            }
            ops.push(expression[i]);
        }
        i++;
    }

    while (ops.length) {
        let val2 = values.pop();
        let val1 = values.pop();
        let op = ops.pop();
        values.push(applyOp(val1, val2, op));
    }

    return values[0];
}

function compute() {
    let to_solve = sentence;
    let result = evaluate(arr.join(''));
    if (!isNaN(result)) {
        result = parseFloat(result).toFixed(4);
    }
    disp(result.toString());
    arr = [result];
    sentence = result.toString();
    add_to_log(to_solve, result);
}