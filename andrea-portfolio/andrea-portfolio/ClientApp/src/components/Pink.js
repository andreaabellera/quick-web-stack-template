import React from "react";
import { PinkHeader } from './PinkHeader';
import Chateau from "../res/pink/chateau_stretch.png";
import CloudLight1 from "../res/pink/cloud_light_1.svg";
import CloudLight2 from "../res/pink/cloud_light_2.svg";
import CloudLight3 from "../res/pink/cloud_light_3.svg";
import CloudLight4 from "../res/pink/cloud_light_4.svg";
import "../styles/pinkHeader.css";
import "../styles/pink.css";

export class Pink extends React.Component {
    static displayName = Pink.name;

    constructor(props) {
        super(props)
        /*this.state = {
            headerToggled: false
        }
        this.toggleHeader = this.toggleHeader.bind(this)*/
    }
    /*toggleHeader(event) {
        this.setState(state => ({ headerToggled: !state.headerToggled }));
    }*/

    render() {
        moveCloud();
        return(
            <div class="pink">
                <img src={Chateau} className="chateau attachBottom" />

                <div class="animateContainer">
                    <object data={CloudLight1} type="image/svg+xml" className="cloud" />
                    <object data={CloudLight2} type="image/svg+xml" className="cloud" />
                </div>

            </div>
        )
    }

    moveCloud() {
        /*var cloud = document.getElementByClass("cloud");
        var pos = 0;
        clearInterval();
        cloud = setInterval(frame, 5);
        function frame() {
            if (pos == 350) {
                clearInterval(cloud);
            }
            else {
                pos++;
                elem.style.left = pos + "px";
            }
        }*/
    }

}