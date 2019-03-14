const MODE_DEG = 0;
const MODE_RAD = 1;
const TYPE_PARENTESIS = 0;
const TYPE_BEHIND = 1;
const TYPE_FRONT = 2;

class Calculadora {
    constructor() {
        self.operacion = "";
        self.input = "0";
        self.modo = MODE_DEG;
        self.parentesis = 0;

        this.updateInput();
    }

    getResultado() {
        let res;

        self.operacion = res;
        this.clearAll();
    }

    addInput(n) {
        if (n == "." && self.input.includes(".")) return;
        self.input += n;
        this.updateInput();
    }

    addDirectOp(op) {
        if (op == "(") self.parentesis++;
        console.log(self.parentesis);

        if (op == ")") {
            if (self.parentesis == 0) return;
            self.parentesis--;
        }

        self.operacion += op;
        this.updateDisplay();
    }

    addOperacion(op, type) {
        console.log(op, type);

        if (type == TYPE_BEHIND) {
            if (self.input == "0") return;


            self.operacion += op + self.input;
        } else if (type == TYPE_FRONT) {
            if (self.input == "0") return;
            if (op == "\)") self.parentesis--;

            self.operacion += self.input + op;
        } else if (type == TYPE_PARENTESIS) {
            self.operacion += op + self.input + "\)";
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
        document.getElementById("display").innerText = self.operacion;
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
        clear();
        self.operacion = "";
        this.updateDisplay();
    }
}

let calc = new Calculadora();