import Logo from '../assets/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='nav-logo' src={Logo} alt="" />
        </nav>
    )
}