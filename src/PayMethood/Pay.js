import React from 'react'
import { FormControl,Container,Row,Col,InputGroup,Form } from 'react-bootstrap';
import pay from '../images/pay.png';
import Apple from '../images/Apple.png';
import accountBalance from '../images/accountBalance.png';
import GroupPay from '../images/GroupPay.png';
import './style.css'
 
function Pay() {
    return (
        <div className="pay__method">
            <Container>
  <Row>
    <Col>
    <h2>Choose a payment method or 
        <br />
          Enter your card information</h2>   
        <br />
         <div className="div__Pay__image">
         <img src={pay}  className="pay__image" alt="pay"/>  
        </div>
        <br />
         <div className="div__Pay__color">
         <img src={Apple}  className="Apple__image" alt="pay"/>  
         <span className="s__PA__N">Pay with Apple Pay</span>
        </div>
        <br />
         <div className="div__Pay__colors">
         <img src={accountBalance}  className="Apple__images" alt="pay"/>  
         <span className="s__PA__N">Experto wallet</span>
        </div>
    </Col>
    <Col>
    <div className="Pay__divsAll">

    <div className="Pay__divs">
    <InputGroup className="mb-3">
 
<Col xs={7} >
<br />
 <Form.Control id="input__pay" type="text" />
</Col>
<br />

    </InputGroup>
    <InputGroup>
    <Col xs={4} >
    <Form.Label id="lable__personal">    Holdername  </Form.Label>
  <Form.Control id="input__pays" type="text" />

</Col>
<Col xs={1} >
 
</Col>
<Col   xs={4}  >
<Form.Label id="lable__personal">   Expiry date </Form.Label>

  <Form.Control id="input__pays" type="text" />
</Col>
</InputGroup>
 
         </div>
         </div>

    </Col>
  </Row>
  </Container>
  <br />
  <br />

  <input type="submit" className="evet" value="Next" />
        </div>
    )
}

export default Pay
