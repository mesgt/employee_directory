import React, { Component } from "react";
// import Row from "./Row";
// import Col from "./Col";
// import Form from "./Form";
// import EmployeeDetail from "./EmployeeDetail";
// import SearchForm from "./SearchForm";
import API from "../utils/API";

class EmployeeDirectoryContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, load Employee Directory
  componentDidMount() {
    API.search()
      .then(res => console.log(res.data.results[0].name))
      .catch(err => console.log(err));
  };


  // handleInputChange = event => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };


render() {
    return (
      <div>
        Test
      </div>
    )}
    }
      // <Form>
      //   <Row>
      //     <Col size="md-8">
      //       <EmployeeDetail/>
            {/* <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card> */}
          // </Col>
          // <Col size="md-4">
            {/* <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card> */}
    //       </Col>
    //     </Row>
    //   </Form>
    // );
//   }
// }

export default EmployeeDirectoryContainer;
