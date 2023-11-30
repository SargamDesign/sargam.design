import './style.css'
import logo from './sargam.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logo}" class="logo" alt="Vite logo" />
    </a>

  </div>
`
