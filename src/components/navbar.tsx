import { Icon, Menu } from 'antd';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';

class NavbarView extends React.Component<{ changeRoute: (route) => void, activeRoute: string }> {
  public render() {
    return <Menu onClick={({key}) => this.props.changeRoute(key)} selectedKeys={[this.props.activeRoute]}
                 mode='horizontal'>
      <Menu.Item key='/live'>
        <Icon type='home'/>Live
      </Menu.Item>
      <Menu.Item key='/playlist'>
        <Icon type='bars'/>Playlists
      </Menu.Item>
    </Menu>
  }
}

const mapStateToProps = state => ({
  activeRoute: state.router.location.pathname,
});


const mapDispatchToProps = (dispatch) => ({
  changeRoute: (route) => {
    return dispatch(push(`${route}`))
  }
});


export const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarView);
