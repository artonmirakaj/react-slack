import React, { Component } from 'react';
import Channels from './Channels';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';

class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: '#4c3c4c', fontsize: '1.2rem' }}
      >
        <UserPanel currentUser={currentUser} />
        <Channels currentUser={currentUser} />
      </Menu>
    );
  }
}

export default SidePanel;