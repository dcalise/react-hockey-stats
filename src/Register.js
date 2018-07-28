import ListErrors from '/ListErrors';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (email, password) => {
    const payload = agent.Auth.register(email, password);
    dispatch({ type: 'REGISTER', payload })
  },
  onUnload: () =>
    dispatch({ type: 'REGISTER_PAGE_UNLOADED' })
});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    }
  }
  
  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <Form>
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.changeEmail} />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.changePassword}/>
        </FormGroup>
        <Button
          type="submit"
          disabled={this.props.inProgress}>
          Register
        </Button>
      </Form>
    )
  }
