import { useState } from "react";
import { Button, Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import Box from "./components/Box";

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click_handler = () => {
    if(email && password){
      console.log(email);
      console.log(password);
    } else {
      console.log("Please enter email and password");
    }
  }

  return (
    <>

      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
        <Form.Control 
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
          />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={(event) => {setPassword(event.target.value)}}
          />
      </FloatingLabel>


      <Box number={1} name={"Moshe"} />
      <Box number={2} name={"Naftali"} />
      <Box number={3} />
      <Button onClick={click_handler} variant="primary">Click Me!</Button>
    </>
  );
};

export default App;
