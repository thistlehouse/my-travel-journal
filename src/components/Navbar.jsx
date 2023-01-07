import '../App.css'
import logo from '../../public/images/logo.png'

function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo"></img>            
        </nav>
    )
}

export default Navbar