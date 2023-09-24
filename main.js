

let elTitle = document.querySelector(".title");
let elInput = document.querySelector(".form-input");
let elForm = document.querySelector(".form");
let elSelect = document.querySelector(".select");
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    let inputValue = Number(elInput.value);
    let selectValue = Number(elSelect.value);
    let obwi = inputValue / selectValue;
    if (selectValue == 12200) {
        elTitle.textContent = inputValue + " So'm pulingiz " + obwi.toFixed(2) + "$" + " bo'ladi";
    }else if (selectValue == 13000) {
        elTitle.textContent = inputValue + " So'm pulingiz " + obwi.toFixed(2) + "€" + " bo'ladi";
    }else if (selectValue == 127) {
        elTitle.textContent = inputValue + " So'm pulingiz " + obwi.toFixed(2) + "₽" + " bo'ladi";
    }

});