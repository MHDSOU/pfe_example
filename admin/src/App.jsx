import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>ADMIN</h1>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div> hello from admin</div>} />
          <Route path="/home" element={<div> hello from admin - home</div>} />
          <Route path="/about" element={<div> hello from admin - about</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
