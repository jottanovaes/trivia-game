import React from 'react';
// import store from '../store';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      disableBtn: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.disableButton();
    });
  }

  disableButton = () => {
    const { name, email } = this.state;
    const result = name && email;
    this.setState({ disableBtn: !result });
    //   if (name && email) {
    //       this.setState({ disableBtn: false });
    //   } else {
    //       this.setState({ disableBtn: true });
    //   }
  }

  render() {
    const { name, email, disableBtn } = this.state;
    return (
      <>
        <input
          value={ name }
          data-testid="input-player-name"
          name="name"
          type="text"
          onChange={ this.handleChange }
        />
        <input
          value={ email }
          data-testid="input-gravatar-email"
          name="email"
          type="email"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          disabled={ disableBtn }
          data-testid="btn-play"
        >
          Jogar
        </button>
      </>
    );
  }
}

export default Login;
