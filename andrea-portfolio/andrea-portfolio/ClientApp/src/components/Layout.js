import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Header } from './Header';
import { PinkHeader } from './PinkHeader';
import { Pink } from './Pink';
import { Panel } from './Panel';
import { Footer } from './Footer';
import "../styles/layout.css";
import GrandeFrame from "../res/pink/frame_pink.png";

export class Layout extends Component {
  static displayName = Layout.name;
    constructor(props) {
        super(props)
    }
    render () {
         return (
            <html>
                 <body>
                     <div className="viewport">
                          <PinkHeader />
                          <div className="centerpiece" style={{ backgroundImage: `url(${GrandeFrame})` }}>
                              <div className="centerwrap">
                                  <Panel />
                              </div>
                          </div>
                          <Pink>
                              {this.props.children}
                          </Pink>
                         <Footer />
                     </div>
                </body>
            </html>
        )
    }
}
