const MODE_DEG = 0;
const MODE_RAD = 1;
const TYPE_PARENTESIS = 0;
const TYPE_BEHIND = 1;
const TYPE_FRONT = 2;

class Calculadora {
    constructor() {
        self.operacion = [];
        self.input = "0";
        self.modo = MODE_DEG;
        self.parentesis = 0;

        this.updateInput();
    }

    separar() {
        while (operacion.indexOf("*") >= 0) {
            let i = operacion.indexOf("*");
            let res = operacion[i - 1] * operacion[i + 1];
            operacion.splice(i - 1, 3);
            operacion.splice(i - 1, 0, res);
        }

        while (operacion.indexOf("/") >= 0) {
            let i = operacion.indexOf("/");
            let res = operacion[i - 1] / operacion[i + 1];
            operacion.splice(i - 1, 3);
            operacion.splice(i - 1, 0, res);
        }

        while (operacion.indexOf("+") >= 0) {
            let i = operacion.indexOf("+");
            let res = operacion[i - 1] + operacion[i + 1];
            operacion.splice(i - 1, 3);
            operacion.splice(i - 1, 0, res);
        }

        while (operacion.indexOf("-") >= 0) {
            let i = operacion.indexOf("-");
            let res = operacion[i - 1] - operacion[i + 1];
            operacion.splice(i - 1, 3);
            operacion.splice(i - 1, 0, res);
        }

        return operacion[0];
    }

    getResultado() {
        self.operacion.push(parseFloat(document.getElementById("input").value));
        this.updateDisplay();

        console.log(self.operacion);

        let res = this.separar();

        console.log(res);

        this.clearAll();
        self.input = res;
        this.updateInput();
    }

    addInput(n) {
        if (n == "." && self.input.includes(".")) return;
        self.input += n;
        this.updateInput();
    }

    addDirectOp(op) {
        if (op == "(") self.parentesis++;
        if (op == ")") {
            if (self.parentesis == 0) return;
            self.parentesis--;
        }

        self.operacion.push(op);
        this.updateDisplay();
    }

    addOperacion(op, type) {
        if (type == TYPE_BEHIND) {
            if (self.input == "0") return;
            self.operacion.push(op);
            self.operacion.push(parseFloat(self.input));
        } else if (type == TYPE_FRONT) {
            if (self.input == "0") return;
            self.operacion.push(parseFloat(self.input));
            self.operacion.push(op);
        } else if (type == TYPE_PARENTESIS) {
            self.operacion.push(op);
            self.operacion.push(parseFloat(self.input));
            self.operacion.push("\)");
        }

        this.clear();
        this.updateDisplay();
    }

    suma(a, b) {
        return a + b;
    }

    resta(a, b) {
        return a - b;
    }

    multiplicacion(a, b) {
        return a * b;
    }

    divicion(a, b) {
        return a / b;
    }


    updateDisplay() {
        if (self.operacion.length) {
            document.getElementById("display").innerText = self.operacion.join(" ");
        }
    }

    updateInput() {
        if (self.input.length > 1 && self.input[0] == "0") {
            self.input = self.input.substring(1, self.input.length);
        }
        document.getElementById("input").value = self.input;
    }

    clear() {
        self.input = "0";
        this.updateInput();
    }

    clearAll() {
        this.clear();
        self.operacion = "";
        this.updateDisplay();
    }
}

let calc = new Calculadora();