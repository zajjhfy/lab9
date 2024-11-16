class CalcAlg{
    calculateResult(x, y, z){
        if(y < 10 && x < 10){
            z = x
        }
        else z = y
        if(z < 0) z+= 10
        return z
    }
}

let button = document.getElementById("alg-get-result")

button.addEventListener("click", () => {
    let x = parseInt(document.getElementById("alg-input-x").value)
    let y = parseInt(document.getElementById("alg-input-y").value)
    let z = parseInt(document.getElementById("alg-input-z").value)
    if(isNaN(x) || isNaN(y) || isNaN(z)) alert("Введите данные")
    else{
        let paragraph = document.getElementById("alg-output")
        let CalcAlg1 = new CalcAlg()
        let result = CalcAlg1.calculateResult(x, y, z)
        paragraph.textContent = "Результат: " + result
    }
})
