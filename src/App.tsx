import { FileJson } from 'lucide-react'
import './App.css'
import ApiDefinitionForm from './components/ApiDefinitionForm'

function App() {

  return (
    <div className="min-h-screen p-4">
      <header className="glassmorphism p-4 mb-6">
        <h1 className="text-3xl text-blue-300 flex items-center justify-center">
          <FileJson className="mr-2" />
          DEFINICIÓN DE API
        </h1>
      </header>
      <main className="max-w-3xl mx-auto">
        <ApiDefinitionForm />
      </main>
    </div>
  )

}

export default App
