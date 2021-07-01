import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { InputGroup, InputGroupText, InputGroupAddon, Input,Form, FormGroup, Label, FormFeedback, FormText } from 'reactstrap';
import { Jumbotron, Button,Container,Row ,Col} from 'reactstrap';
import { ListGroup, ListGroupItem ,Badge } from 'reactstrap';
import { Table } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import MapContainer from './MapContainer';
//import { FaMapMarkedAlt,FaMapSigns,FaMapMarked ,FaCar } from 'react-icons/fa';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '80%',
};
class Tollgate extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.apiGetTarrif = this.apiGetTarrif.bind(this);
    this.apiGetCity =  this.apiGetCity.bind(this);
      this.state = {
        Route: [],
        Tollgates: [],
        Tarrifs: [],
        Cities: [],
          tollgates: null,
          amount: null,
         VClass: '',
         From: '',
         Via: '',
         To: '',
         errormessage: '',
         vehicle_class: '',
            rtgs: '',
            usd: '',
            pula: '',
            rand: '',
      };
   }
   
   handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

componentDidMount() {// Changing the state after 2 sec
    // from the time when the component
    // is rendered
    setTimeout(() => {
      this.setState({ color: 'white' });
    }, 2000);
    this.apiGetTarrif();
    this.apiGetCity();
    this.apiGetTollgates();
    
  }
apiGetTollgates(){
      fetch("http://41.60.204.194:8082/api/tollgates")
      .then(response => response.json())
      .then((result) =>{
        
        console.log(result);
         if(result.length > 0){
           
            this.setState({
              Tollgates: result
            })
         }
      })
      .catch(error => console.log('error', error));
  }
  displayMarkers = () => {
    return this.state.Route.map((toll, index) => {
      return <Marker key={index} id={index} label={""+ toll.name} position={{
       lat: -toll.lat,
       lng: toll.long
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
// http://41.60.204.194:8082/api/tarrif
apiGetTarrif(){
      fetch("http://41.60.204.194:8082/api/tarrif")
      .then(response => response.json())
      .then((result) =>{
        
        console.log(result);
         if(result.length > 0){
           
            this.setState({
              Tarrifs: result
            })
         }
      })
      .catch(error => console.log('error', error));
  }
// http://41.60.204.194:8082/api/cities
apiGetCity(){
      fetch("http://41.60.204.194:8082/api/cities")
      .then(response => response.json())
      .then((result) =>{ 
        
        console.log(result);
         if(result.length > 0){
           
            this.setState({
              Cities: result
            }) 
         }
      })
      .catch(error => console.log('error', error));
  }

apiGetToll(amount){
      let Departure = this.state.From;
      let Detour = this.state.Via;
      let Destination = this.state.To;

      fetch("http://41.60.204.194:8082/api/tollquerys/" + Departure )
      .then(response => response.json())
      .then((result) =>{
         if(result.length > 0){
            for(let i= 0; i < result.length ; i++){
              if(result[i].city_via === Detour){
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
                 else{
                 console.log('No Valid Destination');
                 this.apiGetRevToll(amount);
               }
              }
              else{
                 console.log('No Detour');
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
                 else{
                 this.apiGetRevToll(amount);
                 }
              }
            }
            
         }
      })
      .catch(error => console.log('error', error));
  }
  apiGetRevToll(amount){
      let Departure = this.state.From;
      let Detour = this.state.Via;
      let Destination = this.state.To;

      fetch("http://41.60.204.194:8082/api/tollquerys/" + Departure )
      .then(response => response.json())
      .then((result) =>{
         if(result.length > 0){
            for(let i= 0; i < result.length ; i++){
              if(result[i].city_via === Detour){
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
                 else{
                 console.log('No Valid Destination');
               }
              }
              else{
                 console.log('No Detour');
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
              }
            }
            
         }
      })
      .catch(error => console.log('error', error));
  }
   handleSubmit(event){
      let amount= null;
      let tollgates= null;
      this.handleData();
      event.preventDefault();
   }
  handleData() {
      let amount= null;
      let vehicle_class= null;
          let  rtgs= null;
           let usd= null
           let pula= null;
           let rand= null;
      let tollgates= null;
      let tr = this.state.Tarrifs;
      for(let i = 0 ;i < tr.length; i++)
     {
        if(this.state.VClass === tr[i].vehicle_class) {
            vehicle_class= tr[i].vehicle_class;
            amount= tr[i].rtgs;
            usd= tr[i].usd;
            pula= tr[i].pula;
            rand= tr[i].rand;
            this.updateCost(amount);
            this.setState({
              rtgs:tr[i].rtgs,
              usd:tr[i].usd,
              pula:tr[i].pula,
              rand: tr[i].rand,
            })
            
        } else {
            console.log('Error');
        }
     }
      
  }
  updateCost(amount){
      this.apiGetToll(amount);
  }
  updateData(tollgates ,detour, amount){
    let Route = []
    for(let i = 0 ; i < this.state.Tollgates.length ; i++){
      let toll = this.state.Tollgates[i];
      
      if(toll.city == this.state.From){
        Route.push(toll);
        console.log('Route toll');
        console.log(toll);
      } 
       if(toll.city = this.state.To){
        Route.push(toll);
        console.log('Route toll');
        console.log(toll);
       }
    }
    

     let total = amount * tollgates;
                this.setState({
                  Route : Route,
                amount: amount,
                tollgates: tollgates,
                total: total,
                detour: detour,
            });
            
  }
   myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "id") {
         if (val !=="" && !Number(val)) {
            err = <strong>Your id must be a number</strong>;
         }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
   }
  render() {
    return (
      <>
        <Jumbotron fluid>
        <HeroSection/>
          <Container fluid>
         <form onSubmit={this.handleSubmit}>
        <Container>
        <Row>
          <Col>Define a route to calculate the tolling Fee</Col>
        </Row>
        <hr/>
        <Row>
          
          <Col>Departure</Col>
          <Col>Via Route</Col>
          <Col>Destination</Col>
          <Col>Vehicle Type</Col>
          <Col></Col>
        </Row>

        <Row>
        
          <Col><InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>From</InputGroupText>
          </InputGroupAddon>
        <Input type="select" name="From" id="From" value={this.state.From} onChange={this.handleChange}>
          <option></option>
            {this.state.Cities.map((city, index) => {
                  return <option>{city.city}</option>;
                })}
          </Input>
        </InputGroup></Col>
          <Col><InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Via</InputGroupText>
          </InputGroupAddon>
           <Input type="select" name="Via" id="Via" value={this.state.Via} onChange={this.handleChange}>
          
             {this.state.Cities.map((city, index) => {
                  return <option>{city.city}</option>;
                })}
          </Input>
        </InputGroup></Col>
          <Col><InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>To</InputGroupText>
          </InputGroupAddon>
        <Input type="select" name="To" id="To" value={this.state.To} onChange={this.handleChange}>
            
             {this.state.Cities.map((city, index) => {
                  return <option>{city.city}</option>;
                })}
          </Input>
        </InputGroup></Col>
        <Col>
           <div>
           
            <FormGroup>
               <Input type="select" name="VClass" id="VClass" value={this.state.VClass} onChange={this.handleChange}>
                  <option></option>
                  <option>Light Motor Vehicles</option>
                  <option>Minibuses</option>
                  <option>Buses</option>
                  <option>Heavy Vehicles</option>
                  <option>Haulage Trucks</option>
               </Input>
            </FormGroup>
           </div>
        </Col>
        <Col>
         <input className="btn btn-success btn-sm" type="submit" value="Calculate Route" />
        </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs="3"></Col>
          <Col xs="auto"></Col>
          <Col xs="3"></Col>
        </Row>
      </Container>
       </form>
            </Container>
        </Jumbotron>
         <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: -17.8277, lng: 31.0534}}
            >
              {this.displayMarkers()}
            </Map>
        
         <div className="container">
       <hr/>
          <Row>
            <Col sm="3">
            
            <Card>
            
              <CardBody>
              <Label >Your Route</Label>
              <hr/>
                <Input value={this.state.From} disabled/><br/>
                <Input value={this.state.detour} disabled/><br/>
                <Input value={this.state.To} disabled/><br/>
              </CardBody>
            </Card>
            </Col>
            <Col sm="3" >
            <Card>
              
              <CardBody>
                <Label >Tollgates</Label>
                <hr/>
                <ListGroup>
                <ListGroupItem className="justify-content-between">{this.state.From} - {this.state.detour}- {this.state.To}<Badge pill>{this.state.tollgates}</Badge></ListGroupItem>
               
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
            <Col sm="6" >
            <Card>
              <CardBody>
                <Label >Tolling Cost</Label>
                <hr/>
                 <ListGroup>
                <ListGroupItem className="justify-content-between">{this.state.VClass}</ListGroupItem>
               
                <ListGroupItem className="justify-content-between"></ListGroupItem>
                 <ListGroupItem className="justify-content-between"><strong></strong></ListGroupItem>
                </ListGroup>
                <Table bordered>
      <thead style={{ backgroundColor: 'transparent' }}>
        <tr>
          <th>Tollgates</th>
          <th>USD</th>
          <th>RTGS$</th>
          <th>RAND</th>
          <th>PULA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{this.state.tollgates}</th>
          <td>{this.state.usd * this.state.tollgates}</td>
          <td>{this.state.rtgs * this.state.tollgates}</td>
          <td>{this.state.rand * this.state.tollgates}</td>
          <td>{this.state.pula * this.state.tollgates}</td>
        </tr>
       
      </tbody>
    </Table>
              </CardBody>
            </Card>

            </Col>
          </Row>
          
      </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyASFEIozS-cq6MMSSPSR0_54A8j6l8PyE0'
})(Tollgate);