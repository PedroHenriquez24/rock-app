import { useState } from 'react'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Usuario registrado correctamente')
    }
  }

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Inicio de sesión correcto')
    }
  }

  return (
    <div className="container">
      <h1>Rock Nacional App 🎸</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="buttons">
        <button onClick={signUp}>Registrarse</button>
        <button onClick={signIn}>Iniciar sesión</button>
      </div>
    </div>
  )
}

export default App