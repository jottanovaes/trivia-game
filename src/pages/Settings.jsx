import React from 'react';
import NeonTitle from '../components/NeonTitle';

export default class Settings extends React.Component {
  render() {
    return (
      <>
        <NeonTitle />
        <h1 data-testid="settings-title">Configurações</h1>
      </>
    );
  }
}
