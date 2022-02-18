import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import encryptEmail from '../../services/encryptEmail';
import NeonTitle from '../NeonTitle';
import {
  StyledImg,
  StyledPlayerDataC,
  StyledPlayerDataR,
  StyledTopContainer,
} from './style';
// import { StyledInputContainer } from '../../pages/styles';

class Header extends React.Component {
  userData = (name, score, gravatarEmail) => (
    <StyledPlayerDataR>
      <StyledImg
        data-testid="header-profile-picture"
        src={ `https://www.gravatar.com/avatar/${encryptEmail(gravatarEmail)}` }
        alt="player avatar"
      />
      <StyledPlayerDataC>
        <span data-testid="header-player-name">{name}</span>
        <span>
          Pontuação:
          {' '}
          <span data-testid="header-score">{score}</span>
        </span>
      </StyledPlayerDataC>
    </StyledPlayerDataR>
  );

  render() {
    const { gravatarEmail, name, score } = this.props;
    return (
      <div>
        <header>
          <NeonTitle />
          <StyledTopContainer>
            {this.userData(name, score, gravatarEmail)}
          </StyledTopContainer>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ player: { gravatarEmail, name, score } }) => ({
  gravatarEmail,
  name,
  score,
});

Header.propTypes = {
  player: PropTypes.objectOf,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
