class BitWeekDays {
    constructor(day1, day2 = "", day3 = "", day4 = "", day5 = "", day6 = "", day7 = "") {
        this._workdays = 0; // 0й бит - пн, 1й бит - вт, 2й бит - среда, 3й бит - чт, 4й бит - пт, 5й бит - сб, 6й бит - вс
        this._addDay(day1);
        if (day2 !== "") this._addDay(day2);
        if (day3 !== "") this._addDay(day3);
        if (day4 !== "") this._addDay(day4);
        if (day5 !== "") this._addDay(day5);
        if (day6 !== "") this._addDay(day6);
        if (day7 !== "") this._addDay(day7);
    }

    _addDay(day) {
        if (day === "понедельник") this._workdays |= 1; // 0й бит для пн
        else if (day === "вторник") this._workdays |= 2; // 1й бит для вт
        else if (day === "среда") this._workdays |= 4; // 2й бит для среды
        else if (day === "четверг") this._workdays |= 8; // 3й бит для четверга
        else if (day === "пятница") this._workdays |= 16; // 4й бит для пятницы
        else if (day === "суббота") this._workdays |= 32; // 5й бит для субботы
        else if (day === "воскресенье") this._workdays |= 64; // 6й бит для воскресенья
    }

    showDays() {
        let days = "Переменная класса " + this._workdays + " включает следующие дни недели:\n";
        if (this._workdays & 1) days += "пн ";
        if (this._workdays & 2) days += "вт ";
        if (this._workdays & 4) days += "среда ";
        if (this._workdays & 8) days += "чт ";
        if (this._workdays & 16) days += "пт ";
        if (this._workdays & 32) days += "сб ";
        if (this._workdays & 64) days += "вс ";
        return days;
    }
}

let weekDays
let isCreated = false

let bttnDays = document.getElementById("bit-bttn")
let paragraphBit = document.getElementById("bit-get-res")

bttnDays.addEventListener("click", () => {
    let bitAddDay = document.getElementById("bit-add-day").value
    if(bitAddDay === ''){
        alert("Введите день недели!")
    }
    else if (bitAddDay === 'понедельник' || bitAddDay === 'вторник' || bitAddDay === 'среда' || 
        bitAddDay === 'четверг' || bitAddDay === 'пятница' || bitAddDay === 'суббота' || 
        bitAddDay === 'воскресенье')
    {
        if(isCreated){
            weekDays._addDay(bitAddDay)
        }
        else if(!isCreated){
            weekDays = new BitWeekDays(bitAddDay)
            isCreated = true
        }
        paragraphBit.textContent = weekDays.showDays()
    }
    else {
        alert("Проверьте правильность ввода дня недели!")
    }
})