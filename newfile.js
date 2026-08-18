const name = "Juho";

console.log(`Hello, ${name}!`);

const button = document.querySelector("#button");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
    message.textContent = `Hello, ${name}! You clicked the button.`;
});