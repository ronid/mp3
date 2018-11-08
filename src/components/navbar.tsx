import { Icon, Menu } from 'antd';
import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { RootAction } from '../actions';
import { AppState } from '../types/store';


const NavbarView = (props: NavbarProps) => {
  const {changeRoute, activeRoute} = props;
  return <Menu onClick={({key}) => changeRoute(key)} selectedKeys={[activeRoute]}
               mode='horizontal'>
    <Menu.Item key='/live'>
      <Icon type='home'/>Live
    </Menu.Item>
    <Menu.Item key='/playlist'>
      <Icon type='bars'/>Playlists
    </Menu.Item>
  </Menu>
}

interface StateProps {
  activeRoute: string,
}

interface DispatchProps {
  changeRoute: (route: string) => void
}

type NavbarProps = StateProps & DispatchProps;

const mapStateToProps = (state: AppState) => ({
  activeRoute: state.router.location.pathname,
});

const mapDispatchToProps = (dispatch: Redux.Dispatch<RootAction>) => ({
  changeRoute: (route: string) => {
    return dispatch(push(`${route}`))
  }
});


export const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarView);
