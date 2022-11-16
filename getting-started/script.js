// const container = document.querySelector("#container");
//
// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";
//
// container.appendChild(content);
//
// const red = document.createElement("p");
// red.style.color = "red";
// red.textContent = "Hey I'm red!";
// container.appendChild(red);
//
// const blue = document.createElement("h3");
// blue.style.color = "blue";
// blue.textContent = "I'm a blue h3!";
// container.appendChild(blue);
//
// const divContainer = document.createElement("div");
// divContainer.style.cssText =
//   "border: 1px solid black; background-color: pink; padding: 0 10px;";
//
// const divH1 = document.createElement("h1");
// divH1.textContent = "I'm in a div";
// divContainer.appendChild(divH1);
//
// const divP = document.createElement("p");
// divP.textContent = "ME TOO!";
// divContainer.appendChild(divP);
//
// container.appendChild(divContainer);

// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }
//
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
