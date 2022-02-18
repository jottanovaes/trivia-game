import React from 'react';
import { FcSettings } from 'react-icons/fc';
import PropTypes from 'prop-types';

export default class SettingsBtn extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <FcSettings
        data-testid="btn-settings"
        onClick={ () => history.push('/settings') }
        style={ {
          cursor: 'pointer',
          marginLeft: '8px',
          width: '30px',
          height: '30px',
          position: 'absolute',
          top: '5%',
          left: '95%',
        } }
      />
    );
  }
}

SettingsBtn.propTypes = {
  history: PropTypes.objectOf,
}.isRequired;
