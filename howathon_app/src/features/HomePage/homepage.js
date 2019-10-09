import React from "react";
import { Row, Col, Container} from "react-bootstrap";
import './styles.css';
import CardComponent from "../../components/Card/index"; 
export default class HomePage extends React.Component {
  
  render() {
    return (
      <>
      <div className="title_header">
        
        <h1>Supply Chain Management</h1>
      </div>
      <div className="homepage_div">
        <div className="cards_list">
          <div className="padder">
          <Row>
            <Col xs={6}>
            <CardComponent cardtxt={"Current Location of Boxes"} carddesc={"Display the current locations of the boxes."}>
                
                </CardComponent>
            </Col>
            <Col xs={6}>
              <CardComponent cardtxt={"Location of Boxes at a Given Time"} carddesc={"Display the locations of the boxes at a given time."}>
                
              </CardComponent>
            </Col>
          </Row>
          </div>
          <div className="padder">
          <Row>
            <Col xs={6}>
              <CardComponent cardtxt={"Timeline of a Box"} carddesc={"Display the timeline of a particular box"}>
                
              </CardComponent>
            </Col>
            <Col xs={6}>
              <CardComponent cardtxt={"Timeline of a Location in the Warehouse"} carddesc={"Display the events of a location in the warehouse."}>
                
              </CardComponent>
            </Col>
          </Row>
          </div>
        </div>
      </div>
      </>
    );
  }
}
