import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { Panel } from './Panel';
import { Footer } from './Footer';
import "../styles/layout.css";
import GrandeFrame from "../res/grandeframe.png";

export class Layout extends Component {
  static displayName = Layout.name;
    constructor(props) {
        super(props)
    }
    render () {
         return (
            <html>
                <body>
                      <Header />
                      <div className="centerpiece" style={{ backgroundImage: `url(${GrandeFrame})` }}>
                          <div className="centerwrap">
                              <Panel />
                          </div>
                      </div>
                      <Container>
                          {this.props.children}
                      </Container>
                    <Footer />
                </body>
            </html>
        )
    }
}
