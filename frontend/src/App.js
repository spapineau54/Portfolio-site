import HomeView from './screens/HomeView'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResumeView from './screens/ResumeView'
import ContactView from './screens/ContactView'
import AboutView from './screens/AboutView'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomeView />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/resume' element={<ResumeView />} />
          <Route path='/contact' element={<ContactView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
