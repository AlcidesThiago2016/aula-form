import { useState } from "react"

type FormData = {
  salary?: number;
}

function App() {

  const [formData, setFormData] = useState<FormData>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleInputChange(event: any){
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleSubmit(event: any){
    event.preventDefault();
    console.log(formData.salary || Number.MAX_VALUE);   
}

  return (
    <form onSubmit={handleSubmit}>
      <input 
      name="salary"
      value={formData.salary || ""} 
      type="text" placeholder="Digite um valor mínimo"
      onChange={handleInputChange} />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
