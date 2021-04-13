import React from "react";
import "../App.js";
import "../styles/panel.css";
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import LimeTerracotta from "../res/lime_terracotta.jpg";
import PinkTerracotta from "../res/pink_terracotta.jpg";
import OrangeTerracotta from "../res/orange_terracotta.jpg";
import PurpleTerracotta from "../res/purple_terracotta.jpg";
import BrownTerracotta from "../res/brown_terracotta.jpg";
import BlackTerracotta from "../res/black_terracotta.jpg";
import GreenTerracotta from "../res/green_terracotta.jpg";
import GrayTerracotta from "../res/gray_terracotta.jpg";
import WhiteTerracotta from "../res/white_terracotta.jpg";
import LightBlueTerracotta from "../res/light_blue_terracotta.jpg";

export class Panel extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Navbar>
                <div className="panelBase">
                    <NavItem className="noBullet">
                        <NavLink tag={Link} to="/home" activeClassName="active">
                            <img src={LimeTerracotta} className="brighten" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink tag={Link} to="/counter" activeClassName="active">
                            <img src={PinkTerracotta} className="brighten" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink tag={Link} to="/fetch-data" activeClassName="active">
                            <img src={OrangeTerracotta} className="brighten" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink tag={Link} to="/arrows" activeClassName="active">
                            <img src={PurpleTerracotta} className="brighten" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={BrownTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={BlackTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={GreenTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={WhiteTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={GrayTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="noBullet">
                        <NavLink>
                            <img src={LightBlueTerracotta} className="darken" />
                        </NavLink>
                    </NavItem>
                </div>
            </Navbar>
        )
    }
}