
import { Table, Form, Button } from 'react-bootstrap'
const LoginForm = ({
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
   }) => {
   return (
     <div>
       <h2>Login</h2>
  
       <Form onSubmit={handleSubmit}>
       <Form.Group>
        <Form.Label> username:</Form.Label>
        <Form.Control
             value={username}
             onChange={handleUsernameChange}
           />
         </Form.Group>
         <Form.Group>
          <Form.Label>password: </Form.Label>
            
          <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
       </Form.Group>
         <Button  type="submit">login</Button >
       </Form>
     </div>
   )
  }
  
  export default LoginForm