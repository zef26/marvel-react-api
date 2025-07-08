import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundy from "../errorBounadry/ErrorBoundry";

import decoration from '../../resources/img/vision.png';

class App extends Component  {

    state = {
        selectedChar :null
    }

    onCharSelected = (id) => {
         this.setState({
            selectedChar : id
         })
    }
    render () {
        return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoundy>
                    <RandomChar/>
                </ErrorBoundy>
                <div className="char__content">
                    <ErrorBoundy>
                        <CharList onCharSelected={this.onCharSelected}/>
                    </ErrorBoundy>
                    <ErrorBoundy>
                        <CharInfo charId={this.state.selectedChar}/>
                    </ErrorBoundy>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
    }
}

export default App;