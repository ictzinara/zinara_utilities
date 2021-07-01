import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { InputGroup, InputGroupText, InputGroupAddon, Input,Form, FormGroup, Label, FormFeedback, FormText } from 'reactstrap';
import { Jumbotron, Button,Container,Row ,Col} from 'reactstrap';
import { ListGroup, ListGroupItem ,Badge,List } from 'reactstrap';
import { Box, FlatList, Center, NativeBaseProvider } from "native-base";
import { Table } from 'reactstrap';
import {CardLink
} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import MapContainer from './MapContainer';
//import { FaMapMarkedAlt,FaMapSigns,FaMapMarked ,FaCar } from 'react-icons/fa';
class Vehicle extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
       this.state = {
         errormessage: false,
         error_message: "",
        VRN: "",
        VSTATE: [],
       }
  }
   handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

   handleSubmit(event){
      this.handleData();
      event.preventDefault();
   }
    handleData() {
      
fetch("http://41.60.204.194:8082/api/reg/" + this.state.VRN )
      .then(response => response.json())
      .then((result) =>{
        console.log(result);
         if(result.length > 0){
            this.setState({
              VSTATE: result
            })            
         }else{
           alert("Vehicle Reg Number not Found!!");
           this.setState({
              errormessage: true,
              error_message: "data not found",

           })
         }
      })
      .catch(error => console.log('error', error));
    }


keyExtractor = (item, index) => index.toString()

renderItem = ({ item, index }) => (
  <>
  <div>
    <Card>
      <CardBody>
        <CardTitle tag="h5">Reg Number : {item.reg_no + "\n"}  Chassis : ***{item.chassis.slice(-4)}</CardTitle>
      </CardBody>
      <CardBody>
        <CardText></CardText>
        
        <CardSubtitle tag="h6" className="mb-2 text-muted">Amount Owing :{ item.amount_owing}</CardSubtitle>
        <CardSubtitle>Arrear : {item.arrear_amount}</CardSubtitle>

         {item.non_registered == 0 && <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Registered
          </Label>
        </FormGroup>
          }
          {item.non_registered == 1 && <FormGroup check inline>
          <Label check>
            <Input type="checkbox"/> Registered
          </Label>
        </FormGroup>
          }
         
        <CardLink style={{ color: 'red' }} href="#">Current Expiry Date :{item.current_licence_exp_date}</CardLink>
      </CardBody>
    </Card>
  </div>
   
  </>
)




   render() {
      return (
        
        <>
        <NativeBaseProvider>
        <hr style={{ marginTop: 10 , color: "white"}}/> 
       
        <Container>
        <Jumbotron fluid>
        <Center flex={1}>
              <form onSubmit={this.handleSubmit}>
                <Container>
                <hr style={{ marginTop: 10 , color: "#eec714"}}/><Row><Col><InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>VRN</InputGroupText>
                    </InputGroupAddon>
                  <Input name="VRN" id="VRN" value={this.state.VRN} onChange={this.handleChange} />
                  </InputGroup></Col>
                  <Col>
                  <input className="btn btn-success btn-sm" type="submit" value="Cherk Status" />
                  </Col>
                  </Row>
                  
                </Container>
              </form>
           </Center>
        </Jumbotron>
        <hr style={{ marginTop: 10 , color: "#eec714"}}/>
        </Container>
        

        <div>

        
       <Center>
          {this.state.VSTATE.length > 0 && <FlatList
                data={this.state.VSTATE}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
              />
          } </Center>
        </div>
       
    </NativeBaseProvider>
        </>
      );
    }
}

export default Vehicle;