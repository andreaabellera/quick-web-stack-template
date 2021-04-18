import React from "react";
import "../App.js";
import "../styles/pink.css";
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import HeaderOrnament from "../res/pink/header_decor.png";
import Moi from "../res/pink/CV Button.png";
import MoiHover from "../res/pink/Home Button Down.png";
import Flourish from "../res/pink/Flourish - Wave.png";


class PinkHeaderItem extends React.Component{
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
                </div>
            )
        }
        else{
            return(
                <div className="headerItem">
                    <img src={this.props.imageOnHover} onMouseLeave={this.mouseLeave} />
                </div>
            )
        }
    }
}

export class PinkHeader extends React.Component{
    static displayName = PinkHeader.name;

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
                        <div className="headerTitle"> Terracotta </div>
                        <img src={ Flourish } class="flourish"/>
                        <div className="headerItems">
                            <NavItem className="noBullet">
                                <NavLink tag={Link} to="/home" activeClassName="active">
                                    <PinkHeaderItem image={Moi} imageOnHover={MoiHover} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="noBullet">
                                <NavLink tag={Link} to="/counter" activeClassName="active">
                                    <PinkHeaderItem image={Moi} imageOnHover={MoiHover} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="noBullet">
                                <NavLink tag={Link} to="/fetch-data" activeClassName="active">
                                    <PinkHeaderItem image={Moi} imageOnHover={MoiHover} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="noBullet">
                                <NavLink tag={Link} to="/arrows" activeClassName="active">
                                    <PinkHeaderItem image={Moi} imageOnHover={MoiHover} />
                                </NavLink>
                            </NavItem>
                            <NavItem className="noBullet">
                                <NavLink tag={Link} to="/arrows" activeClassName="active">
                                    <PinkHeaderItem image={Moi} imageOnHover={MoiHover} />
                                </NavLink>
                            </NavItem>
                        </div>
                    </div>
                </Navbar>
                <div className="headerOrnament" style={{ backgroundImage: `url(${HeaderOrnament})` }}></div>
            </header>
        )
    }
}