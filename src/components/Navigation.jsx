import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {FaUmbrella} from 'react-icons/fa'
const Navigation = () => {

  const mapStateToProps = (state) => state
  const mapDispatchToProps = (dispatch) => ({})
  
    return ( 
        <Navbar className="px-4" style={{backgroundColor:"transparent",zIndex:"5"}} expand="lg">

  <Navbar.Brand href="#" className="text-white mx-0"><FaUmbrella size="30px" color="white"/><span style={{paddingLeft:".5em",fontFamily:"Arial",fontWeight:"600",letterSpacing:".1em"}}>WEATHERMAN</span></Navbar.Brand>
  <Navbar.Toggle className="navbar-dark" aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className=" my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
    </Nav>
    <Navbar.Text className="text-white ms-md-auto">
      Signed in as: <a href="#login" style={{color:"lightgrey",fontFamily:"arial",fontWeight:"600"}}>Carl Dawkins</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
  )
}
 
export default Navigation;