import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './pages/homepage';

function App() {
  const client = new QueryClient();

  return (
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>


  )
}

export default App
