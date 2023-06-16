import { Component } from "react";

type props = {
    tema: string
}

export default class Home extends Component<props> {
    
    render() {
        return (
            <div className="home container">
                <div>
                  <p>Grupo <strong className="pulse">WB</strong></p>
                </div>
            </div>
        )
    }
}