import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.onHandleChange = this.onHandleChange.bind(this);

        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }
    static propTypes = {
            endpoint: PropTypes.string.isRequired
     };

    onHandleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    onHandleSubmit(e){
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        const conf = {
          method: "post",
          body: JSON.stringify(lead),
          headers: new Headers({ "Content-Type": "application/json" })
        };
        fetch(this.props.endpoint, conf).then(response => console.log(response));
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.onHandleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.onHandleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.onHandleChange}
                value={email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="message"
                onChange={this.onHandleChange}
                value={message}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;