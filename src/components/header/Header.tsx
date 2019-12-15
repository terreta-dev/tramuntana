import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export class Header extends Component {
  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Tramuntana</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search cities..." className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
