import React from "react";
import InfoDisplay from "./components/infoDisplay";

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      info: {
        name: '',
        email: '',
        phone: '',
        school: '',
        major: '',
        dateStudy: '',
        employer: '',
        position: '',
        jobTask: '',
        dateJob: '',
      },
      formSubmitted: false,
    };
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      info: {
        ...prevState.info,
        [name]: value,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
    });
  };

  editButt = (e) => {
    this.setState({
      formSubmitted:false,
    });
  };

  render() {

    const { info, formSubmitted } = this.state;

    return (
      <div id="container">
        {formSubmitted ? (
        <div>
          <InfoDisplay 
          person={info.name}
          email={info.email}
          phone={info.phone}
          school={info.school}
          major={info.major}
          dateStudy={info.dateStudy}
          company={info.employer}
          position={info.position}
          jobTask={info.jobTask}
          dateJob={info.dateJob}
          />
          <div className="buttCons"> <button className="butts" onClick={this.editButt}>Edit CV</button> </div>
        </div>
        ) : (
        <form id="formCon"onSubmit={this.onSubmit}>
          <label htmlFor="personName">Name</label>
          <input
          onChange={this.handleChange}
          value={info.name}
          type="text"
          name="name"
          id="personName"
          />

          <label htmlFor="email">Email address</label>
          <input
          onChange={this.handleChange}
          value={info.email}
          type="text"
          id="email"
          name="email"
          />

          <label htmlFor="phone">Phone number</label>
          <input
          onChange={this.handleChange}
          value={info.phone}
          type="text"
          id="phone"
          name="phone"
          />

          <label htmlFor="school">School</label>
          <input
          onChange={this.handleChange}
          value={info.school} 
          type="text"
          id="school"
          name="school"
          />

          <label htmlFor="major">Major</label>
          <input
          onChange={this.handleChange}
          value={info.major}
          type="text"
          id="major"
          name="major"
          />

          <label htmlFor="dateStudy">Dates of study</label>
          <input
          onChange={this.handleChange}
          value={info.dateStudy}
          type="text"
          id="dateStudy"
          name="dateStudy"
          />

          <label htmlFor="employer">Employer</label>
          <input 
          onChange={this.handleChange}
          value={info.employer}
          type="text"
          id="employer"
          name="employer"
          />

          <label htmlFor="position">Position</label>
          <input
          onChange={this.handleChange}
          value={info.position}
          type="text"
          id="position"
          name="position"
          />

          <label htmlFor="jobTask">Responsibilities</label>
          <input
          onChange={this.handleChange}
          value={info.jobTask}
          type="text"
          id="jobTask"
          name="jobTask"
          />

          <label htmlFor="dateJob">Dates of employment</label>
          <input
          onChange={this.handleChange}
          value={info.dateJob}
          type="text"
          id="dateJob"
          name="dateJob"
          />
          <div className="buttCons"><button type="submit" className="butts">Generate CV</button></div>
        </form>
        )}
      </div>
    )
  }       
};  

export default App;