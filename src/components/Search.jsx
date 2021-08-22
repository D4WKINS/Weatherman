import { Form,FormControl,Button } from "react-bootstrap"; 
import { fetchCurrentWeather } from "../redux/actions/actions";
import {Component} from 'react';
import {connect} from "react-redux";

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    search:(query) => dispatch(fetchCurrentWeather(query))
})

class Search extends Component {

render(){
    return ( <>

    <Form className="d-flex">
          <FormControl
            id="search"
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange={(e) => this.props.search(e.target.value)}
          />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>

      </>);
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Search);