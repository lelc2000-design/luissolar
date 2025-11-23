import React from 'react'

const preset = {
  name: "Luis Solar — Ultra Premium",
  panels: [
    { model: 'EcoFlow 400W', power: 400, quantity: 2 },
  ],
  inverter: { model: 'Delta Pro 3600', power: 3600 },
  controllers: [
    { model: 'MPPT 60A', maxAmps: 60 },
    { model: 'MPPT 100A', maxAmps: 100 },
  ],
  bankVoltageOptions: [12, 24, 48]
}

export default { preset, PresetView }

function PresetView({ preset }){
  return (
    <div>
      <h3>{preset.name}</h3>
      <ul>
        {preset.panels.map((p, i)=> (
          <li key={i}>{p.quantity} × {p.model} ({p.power}W)</li>
        ))}
      </ul>
      <p>Inverter: {preset.inverter.model} — {preset.inverter.power} W</p>
      <p>Controladores recomendados:</p>
      <ul>
        {preset.controllers.map((c, i)=> <li key={i}>{c.model} ({c.maxAmps}A)</li>)}
      </ul>
    </div>
  )
}
