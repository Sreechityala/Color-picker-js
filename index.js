let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let hexCodeValue = document.getElementById("selectedColorHexCode");

function updateGreyBgColorAndText() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    hexCodeValue.textContent = "#e0e0e0";
}

function updateGreenBgColorAndText() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    hexCodeValue.textContent = "#6fcf97";
}

function updateBlueBgColorAndText() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    hexCodeValue.textContent = "#56ccf2";
}

function updatePurpleBgColorAndText() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    hexCodeValue.textContent = "#bb6bd9";
}