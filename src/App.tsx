import '@/assets/styles/global.scss'
import React from 'react'

export const App = () => {
  return (
    <React.StrictMode>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <h1>hello world from {currentEnv}</h1>
      </div>
    </React.StrictMode>
  )
}
