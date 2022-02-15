import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken } from '../actions';
import SettingsBtn from '../components/SettingsBtn';

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
  }

  handleClick = () => {
  }

  render() {
    const { name, email, disableBtn } = this.state;
    const { payload, history } = this.props;
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
        <Link to="/ingame">
          <button
            type="button"
            disabled={ disableBtn }
            data-testid="btn-play"
            onClick={ () => payload() }
          >
            Jogar
          </button>
        </Link>
        <SettingsBtn history={ history } />
      </>
    );
  }
}

Login.propTypes = {
  payload: PropTypes.func,
  history: PropTypes.objectOf,
}.isRequired;
const mapDispatchToProps = (dispatch) => ({

  payload: () => dispatch(getToken()),

});
export default connect(null, mapDispatchToProps)(Login);
