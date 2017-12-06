import {Link} from 'react-router';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react';

class HomePage extends React.Component
{

  courseRow(course, index) {
      return <div key={index}>{course.title}</div>;
  }
  render() {
        return (
          <div className="jumbotron">
            {this.props.courses.map(this.courseRow)}

            <h1>Test</h1>
            <p>React</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
          </div>
        );
    }
}

HomePage.propTypes = {
    //dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    //createCourse: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(HomePage);
