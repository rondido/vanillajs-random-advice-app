const ADVEICE_URL = 'https://api.adviceslip.com/advice'

const Container = document.createElement('div')

const button = document.createElement('button')

Container.classList.remove('container-advice')

async function fetchApi() {
  const abc = await fetch(ADVEICE_URL)
  const data = await abc.json()
  Container.innerHTML = `
    <div id=${data.slip.id} class="advice"><p class="advice-discrption">${data.slip.advice}</p></div>
  `
}

Container.classList.add('container-advice')

button.textContent = '명언 가져오기'

button.addEventListener('click', () => {
  fetchApi()
})

button.classList.add('advice-get-btn')

document.body.appendChild(Container)
document.body.appendChild(button)
