import React from "react";
import "../App.js";
import "../styles/header.css";
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderOrnament from "../res/charmanteDividerWider.png";
import Moi from "../res/headerMoi.png";
import MoiHover from "../res/headerMoiHover.gif";

class HeaderItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }
    mouseOver(event) {
        this.setState({
            hovered: true
        })
    }
    mouseLeave(event) {
        this.setState({
            hovered: false
        })
    }
    render() {
        if(!this.state.hovered){
            return(
                <div className="headerItem">
                    <img src={this.props.image} onMouseOver={this.mouseOver}/>
                    {this.props.text}
                </div>
            )
        }
        else{
            return(
                <div className="headerItem">
                    <img src={this.props.imageOnHover} onMouseLeave={this.mouseLeave} />
                    {this.props.text}
                </div>
            )
        }
    }
}

export class Header extends React.Component{
    static displayName = Header.name;

    constructor(props){
        super(props)
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render(){
        return(
            <header> 
                <Navbar>
                    <div className="headerBase">
                        <NavItem className="noBullet">
                            <NavLink tag={Link} to="/home" activeClassName="active">
                                <HeaderItem image={Moi} imageOnHover={MoiHover} text="Home" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="noBullet">
                            <NavLink tag={Link} to="/counter" activeClassName="active">
                                <HeaderItem image={Moi} imageOnHover={MoiHover} text="Counter" />
                            </NavLink>
                        </NavItem>
                        
                        <div className="headerTitle"> ThreeJS Playground </div>

                        <NavItem className="noBullet">
                            <NavLink tag={Link} to="/fetch-data" activeClassName="active">
                                <HeaderItem image={Moi} imageOnHover={MoiHover} text="Fetch Data" />
                            </NavLink>
                        </NavItem>
                        <NavItem className="noBullet">
                            <NavLink tag={Link} to="/arrows" activeClassName="active">
                                <HeaderItem image={Moi} imageOnHover={MoiHover} text="Arrows" />
                            </NavLink>
                        </NavItem>
                    </div>
                </Navbar>
                <div className="headerOrnament" style={{ backgroundImage: `url(${HeaderOrnament})` }}></div>
            </header>
        )
    }
}