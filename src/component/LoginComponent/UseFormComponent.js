import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import AuthenticationService from '../AuthenticationService'
const UseFormComponent = () =>{
    const history = useHistory();

    const [values, setValues] = useState({
        username:'',
        password:''
    })
    console.log(values)
    const handleChange = e => {
        const {name,value} =e.target;
        setValues({
            ...values, 
            [name]:value
        })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if(values.username==="user" && values.password==="pass123"){
           AuthenticationService.registerSuccessfullLogin(values.username,values.password);
            history.push('/home')
            console.log('pass');

        }else{
            console.log('fail');
        }
    }

    return{ handleChange,values,handleSubmit}
}
export default UseFormComponent;