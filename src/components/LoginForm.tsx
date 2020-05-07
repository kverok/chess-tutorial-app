// Libs
import React, { PureComponent } from 'react';

// Components
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

// Constants
import { PROP_EMAIL, PROP_PASSWORD } from '../constants';

// Styles
import '../styles/auth-form.scss';

interface Props {
  onSwitchForm(): void;
}

interface State {
  [PROP_EMAIL]: string;
  [PROP_PASSWORD]: string;
}

export default class LoginForm extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      [PROP_EMAIL]: '',
      [PROP_PASSWORD]: '',
    };
  }

  render() {
    const { onSwitchForm } = this.props;

    return (
      <Form className="auth-form login-form shadow p-3 mb-5 bg-white rounded">
        <Form.Group controlId="userEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Row className={'submit-section justify-content-around'}>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Nav onSelect={() => onSwitchForm()}>
            <Nav.Item>
              <Nav.Link eventKey="sign-up">Sign Up</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Form>
    );
  }
}
