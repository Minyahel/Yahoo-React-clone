import React, { Component } from "react";

import Card  from "./card";

class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            articles: {},
            cards: []
        }
    }

    componentDidMount() {
        this.loadArticles();
    }

    loadArticles() {
        fetch("articles.json")
        .then(res => res.json())
        .then(res => { 
            this.setState({articles: res});
            this.generateCards();
        })
    }
    
    generateCards() {
        let cards = []
        for (let i = 0; i < this.state.articles.length; i++) {
            cards.push(<Card key={i} data={this.state.articles[i]} />);            
        }

        this.setState({cards : cards})
    }

    render() {
        return(
            <div>
                Main Component
                {this.state.cards}
            </div>
        )
    }

}

export default Main;