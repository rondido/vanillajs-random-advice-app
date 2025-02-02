const ADVEICE_URL = "https://api.adviceslip.com/advice";

let json;
async function fetchApi() {
  const abc = await fetch(ADVEICE_URL);
  const data = await abc.json();
  Container.innerHTML = `
    <div id=${data.slip.id} class="advice"><p>${data.slip.advice}</p></div>
  `;
}

const Container = document.createElement("div");

const button = document.createElement("button");

Container.classList.add("container-advice");

button.textContent = "명언 가져오기";

button.addEventListener("click", () => {
  fetchApi();
});

document.body.appendChild(Container);
document.body.appendChild(button);
