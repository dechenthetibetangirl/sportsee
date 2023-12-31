import { NavLink, Link } from 'react-router-dom'
import yogaButton from '../../../assets/images/sideBar/yogaButton.png'
import swimmingButton from '../../../assets/images/sideBar/swimmingButton.png'
import bicycleButton from '../../../assets/images/sideBar/bicycleButton.png'
import bodyBuildingButton from '../../../assets/images/sideBar/bodyBuildingButton.png'

const Sidebar = () => {
  return (
    <aside className='sidebar'>

      {/** *********** Side Bar Buttons ******************/}
      <nav>
        <NavLink to={'/'}>
          <img src={yogaButton} className='sidebar_button' alt='yoga' />
        </NavLink>
        <NavLink to={'/'}>
          <img src={swimmingButton} className='sidebar_button' alt='swim' />
        </NavLink>
        <NavLink to={'/'}>
          <img src={bicycleButton} className='sidebar_button' alt='bicycle' />
        </NavLink>
        <NavLink to={'/'}>
          <img src={bodyBuildingButton} className='sidebar_button' alt='body building' />
        </NavLink>
      </nav>
      {/** *********** Side Bar Copyright Text ******************/}
      <div className='sidebar_text'>Copiryght, SportSee 2020</div>
    </aside>
  )
}

export default Sidebar
