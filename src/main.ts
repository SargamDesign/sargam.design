import './style.css'
import logo from './sargam.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://sargam.design">
      <img src="${logo}" class="logo" alt="Sargam logo" />
    </a>
  </div>
`
