import React, { useState } from 'react'
import ProjectLuis from './components/ProjectLuis'
import Calculator from './components/Calculator'

export default function App(){
  const [preset] = useState(ProjectLuis.preset)
  return (
    <div className="app">
      <header>
        <h1>Luís Solar — Ultra (fresh)</h1>
      </header>
      <main>
        <section className="card">
          <h2>Proyecto</h2>
          <ProjectLuis.PresetView preset={preset} />
        </section>
        <section className="card">
          <h2>Calculadora de controladores</h2>
          <Calculator preset={preset} />
        </section>
      </main>
      <footer>
        <small>Generated fresh — ready to build</small>
      </footer>
    </div>
  )
}
