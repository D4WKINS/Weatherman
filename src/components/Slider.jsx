import {Carousel,Row,Col} from 'react-bootstrap'
import {useState} from 'react'


const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return ( 
      <Carousel className="mb-md-4" style={{height:"100%",width:"100%",zIndex:"5"}} activeIndex={index} onSelect={handleSelect}>
  
      <Carousel.Item className="m-0" style={{backgroundColor:"transparent"}}>
      <Row className="h-100 w-100 justify-content-center mx-0 align-content-center" >
          <Col className="text-center">
          <h2 className="text-white">WELCOME TO <span style={{fontFamily:"Arial",fontWeight:"600",letterSpacing:".1em"}}>WEATHERMAN</span></h2>
          </Col>
        </Row>
      </Carousel.Item>

      <Carousel.Item className="m-0" style={{backgroundColor:"transparent"}}>
      <Row className="h-100 w-100 justify-content-center mx-0 align-content-center" >
          <Col className="text-center">
          <h2 className="text-white">SEARCH FOR YOUR  <span style={{fontFamily:"Arial",fontWeight:"600",letterSpacing:".1em"}}>CITY</span></h2>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
   );
}
 
export default Slider;