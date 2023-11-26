import Future from '../components/Hero/Future'
import Getstarted from '../components/Hero/Getstarted'
import Heropage from '../components/Hero/Heropage'
import Teams from '../components/Hero/Teams'
import What from '../components/Hero/What'

const Homescreen = () => {
  return (
    <div>
      <Heropage />
      <What />
      <Future />
      <Teams />
      <Getstarted />
    </div>
  )
}

export default Homescreen