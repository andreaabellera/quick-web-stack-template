import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { Footer } from './Footer';

import "../styles/layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (
        <html>
            <body>
                <Header />
                <Container> {this.props.children} </Container>
                <Footer />
            </body>
        </html>
    )
  }
}
