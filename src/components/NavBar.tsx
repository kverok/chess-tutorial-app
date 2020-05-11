// Libs
import React from 'react';

// Imported types
import { PureComponent } from 'react';
import { SignOutAction } from '../types';

// Components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

// Constants
import {
  ROUTE_PATH_DEFAULT,
  ROUTE_PATH_LESSONS,
  ROUTE_PATH_PROFILE,
} from '../constants';

// Static assets
import Logo from '../assets/chess-logo.png';

// Local types
interface Props {
  onSignOut(): SignOutAction;
}

export default class NavBar extends PureComponent<Props> {
  private renderNavLinks = (): JSX.Element => {
    return (
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={ROUTE_PATH_LESSONS}>
          Lessons
        </Nav.Link>
        <Nav.Link as={Link} to={ROUTE_PATH_PROFILE}>
          User Profile
        </Nav.Link>
      </Nav>
    );
  };

  render() {
    const { onSignOut } = this.props;

    return (
      <Navbar bg="light">
        <Navbar.Brand
          className={'navbar-chess-brand'}
          as={Link}
          to={ROUTE_PATH_DEFAULT}
        >
          <img
            alt="chess logo"
            src={Logo}
            width="100"
            height="100"
            className="d-inline-block align-center"
          />{' '}
          Chess Tutorial App
        </Navbar.Brand>
        {this.renderNavLinks()}
        <Form inline>
          <Button variant="primary" onClick={onSignOut}>
            Sign Out
          </Button>
        </Form>
      </Navbar>
    );
  }
}
