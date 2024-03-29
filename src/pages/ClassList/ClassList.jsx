import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getClassList } from '../../services/api-calls'

class ClassList extends Component {
  state = {
      results: []
  }

  async componentDidMount() {
    const classData = await getClassList()
    this.setState({ results: classData.results })
    console.log(this.state.results)
  }

  render() {
    return (
      <>
        <h1>Class List</h1>
        <div className="icon-container">
          {this.state.results.map((classTitle) => (
            <div key={ classTitle.index }>
              {/* Here's our new Link */}
              <Link to={{pathname: `/class`, state: { classTitle } }}>
                {/* We'll need another div here now for styling */}
                <div id="classDiv">
                  <img 
										style={{ width: "100px", height: "100px" }} 
										src={`/images/${classTitle.name}.svg`} 
										alt=""
									/>
                  {classTitle.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ClassList