import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>CLIENT</h1>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<div> hello from client</div>} />
          <Route path="/home" element={<div> hello from client - home</div>} />
          <Route
            path="/about"
            element={<div> hello from client - about</div>}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
