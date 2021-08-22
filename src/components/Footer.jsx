import {Row,Col} from 'react-bootstrap';
const Footer = () => {
    return ( 
        
        <div id="footer" className="w-100 pt-5 fixed-bottom" style={{backgroundColor:"black"}}>
            <Row style={{maxWidth:"700px"}} className="mx-auto" >
            <Col className="justify-content-center" xs={12} md={3}>
                <ul >
                    <li>Hello</li>
                    <li>It's</li>
                    <li>WEATHERMAN</li>
                </ul>
            </Col>

            <Col className="justify-content-center" xs={12} md={3}>
                <ul>
                    <li>Hello</li>
                    <li>It's</li>
                    <li>WEATHERMAN</li>
                </ul>
            </Col>

            <Col className="justify-content-center" xs={12} md={3}>
                <ul>
                    <li>Hello</li>
                    <li>It's</li>
                    <li>WEATHERMAN</li>
                </ul>
            </Col>
            <Col className="justify-content-center" xs={12} md={3}>
                <ul>
                    <li>Hello</li>
                    <li>It's</li>
                    <li>WEATHERMAN</li>
                </ul>
            </Col>
            </Row>
            </div>
     );
}
 
export default Footer;