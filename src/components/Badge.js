import React from 'react';
import "./styles/style.css"

class Badge extends React.Component {
    //obligatorio
    render() {

        return <div className="Badge">

            <div className="Badge__header">
                <img src="https://static.platzi.com/media/tmp/class-files/git/platzi-badges/platzi-badges-3.PrimerComponente/src/images/badge-header.svg" alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <img 
                    className="Badge__avatar"
                    src={this.props.avatarURL}
                    alt="Avatar" />
                <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">#printf-naype</div>
        </div>
    }
}

export default Badge;