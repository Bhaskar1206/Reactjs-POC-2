import { BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import FormComponent from './LoginComponent/FormComponent'
import HomeComponent from './HomeComponent'
import ProductList from './ProductList'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import AuthenticationRoute from './AuthenticationRoute'

function ProductComponent(){

    return(
        <div >
            <Router>
                <HeaderComponent></HeaderComponent>
                    <Switch>
                        <Route path="/" exact component={FormComponent}></Route>
                        <Route path="/login" component={FormComponent}></Route>
                        <AuthenticationRoute path="/home" component={HomeComponent}></AuthenticationRoute>
                        <AuthenticationRoute path="/product-list" component={ProductList}></AuthenticationRoute>
                        <AuthenticationRoute path="/logout" component={LogoutComponent}></AuthenticationRoute>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                <FooterComponent></FooterComponent>
                
            </Router>
        </div>
    )

}
export default ProductComponent;