import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import encryptEmail from '../services/encryptEmail';
import NeonTitle from './NeonTitle';

class Header extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div>
        <header>
          <NeonTitle />
          <img
            data-testid="header-profile-picture"
            src={ `https://www.gravatar.com/avatar/${encryptEmail(player.gravatarEmail)}` }
            alt="player avatar"
          />
          <span
            data-testid="header-player-name"
          >
            { player.name }
          </span>
          <span
            data-testid="header-score"
          >
            { player.score }
          </span>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({ player });

Header.propTypes = {
  player: PropTypes.objectOf,
}.isRequired;

export default connect(mapStateToProps, null)(Header);
