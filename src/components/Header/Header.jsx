import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            

        </div>
    )
}

export default Header;