import React, { Component } from "react";
import { getDetails } from "../../services/api-calls";

class ClassDetails extends Component {
  state = {
    //This is where we use state passed in via location 
    url: this.props.location.state.classTitle.url,
    classDetails: {},
  };

  async componentDidMount() {
    // This is where our API call will live
    const classDetails = await getDetails(this.state.url)
    // Then we'll set state!
    this.setState({ classDetails })
  }

  render() { 
    //Look at this nifty functional programming happiness!!
    const { classDetails } = this.state;
    
    return (
      <div>
        { classDetails.name ?
        <>
        {/* Gotta have the random cat pics... */}
        <img src="http://theoldreader.com/kittens/320/240/" alt=""/>
        <h2>{classDetails.name}</h2>
        <div>Hit die: d{classDetails.hit_die}</div>
        <h3>Proficiencies:</h3>
        {classDetails.proficiencies.map((proficiency) => (
          <div key={proficiency.index}>{proficiency.name}</div>
        ))}
        </>
        :
        <>
        <p>Loading class details...</p>
        </>
        }
      </div>
    );
  }
}

export default ClassDetails;