import { Link } from 'react-router-dom'
import '../Styles/MainSite.css'

const MainSite: React.FC = () => {
  return (
    <div className='parent-wrapper'>
      <div>

        <h1 style={{ color: 'white', fontSize: '90px', textAlign: 'center' }}>
          Awesome Stuff <br /> Starts Here
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link to='/login'>
            <button className='btn-login'>
              Login
            </button>
          </Link>
        </div>

      </div>

    </div>

  )
}

export default MainSite
