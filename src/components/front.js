import React from 'react'
import Timeline from '../components/timeline'

class Front extends React.Component {
    render() {
        return (
                <div className="front">
                    <div className="shad"></div>
                    <div className="image"></div>
                    <div className="logo">
                        <img src={require("../img/timeline.png")} alt="x"/>
                    </div>
                    <div className="welcometext">
                        <h1><b>TIMELINE OF INNOVATIONS IN COMPUTING</b></h1>
                    </div>
                    <div className="and">&</div>
                    <div className="web">THE INTERNET</div>
                </div>
        )
    }
}

export default Front;