import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import AuthenticationService from './AuthenticationService'
function HeaderComponent(){

    const user= AuthenticationService.isLogin();

    return(
        <header className="header">
            <nav className="nav navbar-expand-md navbar-dark bg-dark">
                <ul className="navbar-nav">
                    { user && <li><Link className="nav-link" to="/home">Home</Link></li>}
                    {user && <li><Link className="nav-link" to="/product-list">Product-List</Link></li>}
                                        
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!user && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {user && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                                        
                </ul>
            </nav>
        </header>
    )

}
export default withRouter(HeaderComponent);