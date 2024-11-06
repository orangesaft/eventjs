//add input value on the ul
const buttons = document.querySelector("button");
const input = document.querySelector("#item");
const shpli = document.querySelector("ul");

//1.read input whenever button is triggered
buttons.addEventListener("click", () => {

    const newLi = document.createElement("li");
    newLi.textContent = input.value; // Use input.value to get the value typed into the input field


shpli.appendChild(newLi);

    });
//2.function that creates <li>newValue</li>
//3.append to original ul
