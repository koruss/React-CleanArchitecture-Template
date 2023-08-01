import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import MainSite from './Pages/MainSite'

function App (): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  )
}

export default App
