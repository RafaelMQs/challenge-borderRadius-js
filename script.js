const maskOptions = {
    mask: /^\d{1,3}$/,
};

var topLeftValue = 0,
    topRightValue = 0,
    bottomLeftValue = 0,
    bottomRightValue = 0;

var numbersInputs = document.querySelectorAll(".input-number");
var elementRef = document.querySelector("#element-ref");

numbersInputs.forEach((element) => {
    var mask = IMask(element, maskOptions);
});

function changeBorderRadius(borderSide) {
    document.querySelector("#top-left-input").value != "" ? topLeftValue = document.querySelector("#top-left-input").value : topLeftValue = 0;
    document.querySelector("#top-right-input").value != "" ? topRightValue = document.querySelector("#top-right-input").value : topLeftValue = 0;
    document.querySelector("#bottom-left-input").value != "" ? bottomLeftValue = document.querySelector("#bottom-left-input").value : topLeftValue = 0;
    document.querySelector("#bottom-right-input").value != "" ? bottomRightValue = document.querySelector("#bottom-right-input").value : topLeftValue = 0;
    elementRef.style.borderRadius = `${topLeftValue}px ${topRightValue}px ${bottomLeftValue}px ${bottomRightValue}px`;
    elementRef.querySelector("p span").innerHTML = `${topLeftValue}px ${topRightValue}px ${bottomLeftValue}px ${bottomRightValue}px`;
}

function copyText() {
    var alert = document.querySelector("#alert");
    var copyText = elementRef.querySelector("p").textContent;
    navigator.clipboard.writeText(copyText);
    console.log(alert)
    alert.querySelector("p").textContent = "Texto copiado com sucesso!";
    alert.style.display = "";
}