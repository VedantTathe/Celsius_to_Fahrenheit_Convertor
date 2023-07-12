const btn = document.getElementById("btn");
btn.disabled = true;

// console.log(type)

const res = document.getElementById("result");

// console.log(num)

document.getElementById("num").addEventListener('change', ()=>{
    btn.disabled = false;
})

const celsToFah = (cel) => {
    let result = Math.round((cel * 9 / 5) + 32);
    res.innerHTML = `= ${result} Fahrenheit`;
}

const fahToCels = (fah) => {
    let result = Math.round((fah -32) * 5/9);
    res.innerHTML = `= ${result} Celsius`;
}


btn.addEventListener('click', () => {
    const option = document.getElementById("temp-type");
    const type = option.value;

    const num = document.getElementById("num").value;

    if (type == "Celsius") {
        celsToFah(num);
    }
    else {
        fahToCels(num);
    }
});