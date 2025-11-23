import React, { useState } from 'react'

export default function Calculator({ preset }){
  const defaultVoltage = preset.bankVoltageOptions ? preset.bankVoltageOptions[2] : 48
  const [bankVoltage, setBankVoltage] = useState(defaultVoltage)

  const totalPanelW = preset.panels.reduce((s,p)=> s + p.power * p.quantity, 0)
  const current = (totalPanelW / bankVoltage)
  const recommendedControllerAmps = Math.ceil(current * 1.25)

  return (
    <div>
      <p>Total panel power: <strong>{totalPanelW} W</strong></p>
      <label>Bank voltage: 
        <select value={bankVoltage} onChange={e=>setBankVoltage(Number(e.target.value))}>
          {preset.bankVoltageOptions.map(v=> <option key={v} value={v}>{v}V</option>)}
        </select>
      </label>
      <p>Estimated array current at {bankVoltage}V: <strong>{current.toFixed(2)} A</strong></p>
      <p>Recommended controller size (with 25% margin): <strong>{recommendedControllerAmps} A</strong></p>
    </div>
  )
}
