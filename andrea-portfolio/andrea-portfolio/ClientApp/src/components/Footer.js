import React from "react";
import "../styles/footer.css";


export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <span className="left"> React Project Template </span>
                <span className="right"> Prepared by Andrea Abellera © 2021 </span>
            </footer>
        )
    }
}