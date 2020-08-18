import react, { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Form, Label, Input,  } from 'reactstrap';


const Login = () => {
    const [login, setLogin] = useState ({
        username: '',
        email: '',
        password: ''
    })

const { username, email, password } = login;
const { push } = usehistory();


const handleChange = (e) => {
    setLogin({
        setLogin({
            ...login, 
            [e.target.name]: e.target.value
        })
    });
}

const handleSubmit = (e) => {
    e.preventDefault();
}


return (
    <> 

    <Form onSubmit={handleSubmit} >

        <FormGroup >
          <Label >Username</Label>
          <Input 
            type='text'
            name='username'
            value={username}
            onChange={handleChange}
            placeholder='Enter Username'
            />
        </FormGroup>

        <FormGroup >
          <Label >Password</Label>
          <Input 
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Enter Password'
            />
        </FormGroup>

        <Button style={{  background: 'lightseagreen', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ' }} >Submit</Button>

      </Form>
    </>
)
}

export default Login;