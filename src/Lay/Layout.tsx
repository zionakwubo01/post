
import { Outlet } from 'react-router-dom'
import Header from '../components/Static.tsx/Header'
import Footer from '../components/Static.tsx/Footer'

const layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default layout