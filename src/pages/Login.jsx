import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken, requestSetPlayer } from '../actions';
import SettingsBtn from '../components/SettingsBtn';
import NeonTitle from '../components/NeonTitle';
import {
  StyledLoginField,
  StyledInput,
  StyledInputContainer,
  StyledButton,
} from './styles';

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
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.disableButton();
      },
    );
  };

  disableButton = () => {
    const { name, email } = this.state;
    const result = name && email;
    this.setState({ disableBtn: !result });
  };

  handleClick = async () => {
    const { payload, history, payloadLogin } = this.props;
    const { name, email } = this.state;
    await payload();
    await payloadLogin({ name, gravatarEmail: email });
    history.push('/ingame');
  };

  render() {
    const { name, email, disableBtn } = this.state;
    const { history } = this.props;
    return (
      <>
        <NeonTitle />
        <StyledInputContainer>
          <StyledLoginField>
            <StyledInput
              data-testid="input-player-name"
              name="name"
              onChange={ this.handleChange }
              placeholder="Nome"
              type="text"
              value={ name }
            />
            <StyledInput
              data-testid="input-gravatar-email"
              name="email"
              onChange={ this.handleChange }
              placeholder="Gravatar Email"
              type="email"
              value={ email }
            />
            <StyledButton
              data-testid="btn-play"
              disabled={ disableBtn }
              onClick={ () => this.handleClick() }
              type="button"
            >
              JOGAR
            </StyledButton>
          </StyledLoginField>
        </StyledInputContainer>
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
  payloadLogin: (payload) => dispatch(requestSetPlayer(payload)),
});
export default connect(null, mapDispatchToProps)(Login);
