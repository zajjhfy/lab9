class CalcRegion {
    constructor(x_min_1, x_max_1, y_min_1, y_max_1,
                x_min_2, x_max_2, y_min_2, y_max_2) {
        this._x_min_1 = x_min_1;
        this._x_max_1 = x_max_1;
        this._y_min_1 = y_min_1;
        this._y_max_1 = y_max_1;
        this._x_min_2 = x_min_2;
        this._x_max_2 = x_max_2;
        this._y_min_2 = y_min_2;
        this._y_max_2 = y_max_2;

        console.log("Инициализация данных класса:");
        console.log(`Прямоугольник 1: x=[${this._x_min_1}; ${this._x_max_1}] U y=[${this._y_min_1}; ${this._y_max_1}]`);
        console.log(`Прямоугольник 2: x=[${this._x_min_2}; ${this._x_max_2}] U y=[${this._y_min_2}; ${this._y_max_2}]`);
    }

    isFirstMin(a, b) {
        return a <= b;
    }

    interSectRegion() {
        let str_def = "Результат: пустое множество. ";
        let str_ret = "";

        let x_reg_min = -100500, x_reg_max = -100500; // расчет пересечений по координате X
        if (this.isFirstMin(this._x_min_2, this._x_max_1) && this.isFirstMin(this._x_min_1, this._x_min_2)) {
            x_reg_min = this._x_min_2;
            x_reg_max = this._x_max_1;
        } else if (this.isFirstMin(this._x_min_1, this._x_max_2) && this.isFirstMin(this._x_min_2, this._x_min_1)) {
            x_reg_min = this._x_min_1;
            x_reg_max = this._x_max_2;
        } else {
            return str_def + "Нет пересечений по координате X\n"; // прямоугольники не пересекаются
        }

        let y_reg_min = -100500, y_reg_max = -100500; // расчет пересечений по координате Y
        if (this.isFirstMin(this._y_min_2, this._y_max_1) && this.isFirstMin(this._y_min_1, this._y_min_2)) {
            y_reg_min = this._y_min_2;
            y_reg_max = this._y_max_1;
        } else if (this.isFirstMin(this._y_min_1, this._y_max_2) && this.isFirstMin(this._y_min_2, this._y_min_1)) {
            y_reg_min = this._y_min_1;
            y_reg_max = this._y_max_2;
        } else {
            return str_def + "Нет пересечений по координате Y\n"; // прямоугольники не пересекаются
        }

        str_ret = `Результат: x = [${x_reg_min}; ${x_reg_max}] U y = [${y_reg_min}; ${y_reg_max}]\n`;
        return str_ret;
    }
}

let bttnReg = document.getElementById("reg-bttn")
let paragraphReg = document.getElementById("reg-get-result")

bttnReg.addEventListener("click", ()=> {
    let x_min_1 = parseInt(document.getElementById("reg-x-min-1").value)
    let x_max_1 = parseInt(document.getElementById("reg-x-max-1").value)
    let y_min_1 = parseInt(document.getElementById("reg-y-min-1").value)
    let y_max_1 = parseInt(document.getElementById("reg-y-max-1").value)
    let x_min_2 = parseInt(document.getElementById("reg-x-min-2").value)
    let x_max_2 = parseInt(document.getElementById("reg-x-max-2").value)
    let y_min_2 = parseInt(document.getElementById("reg-y-min-2").value)
    let y_max_2 = parseInt(document.getElementById("reg-y-max-2").value)

    if(isNaN(x_min_1) || isNaN(x_max_1) || isNaN(y_min_1) || isNaN(y_max_1) || 
    isNaN(x_min_2) || isNaN(x_max_2) || isNaN(y_min_2) || isNaN(y_max_2)){
        alert("Введите данные!")
    }
    else if(x_min_1 <= -100500 || x_min_1 >= 100500 || x_max_1 <= -100500 || x_max_1 >= 100500
        || y_min_1 <= -100500 || y_min_1 >= 100500 || y_max_1 <= -100500 || y_max_1 >= 100500
        || x_min_2 <= -100500 || x_min_2 >= 100500 || x_max_2 <= -100500 || x_max_2 >= 100500
        || y_min_2 <= -100500 || y_min_2 >= 100500 || y_max_2 <= -100500 || y_max_2 >= 100500
    ){
        alert("Значение должно находиться между -100500 и 100500!")
    }
    else{
        const calcRegion = new CalcRegion(x_min_1, x_max_1, y_min_1, y_max_1,
            x_min_2, x_max_2, y_min_2, y_max_2);
        paragraphReg.textContent = calcRegion.interSectRegion()
    }
})

