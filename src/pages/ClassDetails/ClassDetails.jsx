import React, { Component } from "react";

class ClassDetails extends Component {
  state = {
    //This is where we use state passed in via location 
    url: this.props.location.state.classTitle.url,
    classDetails: {},
  };

  async componentDidMount() {
    // This is where our API call will live
    // Then we'll set state!
  }

  render() {
    return (
      <div>
        <h3>Class Details</h3>
      </div>
    );
  }
}

export default ClassDetails;