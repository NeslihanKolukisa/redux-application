import './App.css';
import {Link, Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container,
} from 'semantic-ui-react';
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Container text style={{marginTop: '2em'}}>
                    <p>
                        This example shows how to use lazy loaded images, a sticky menu, and a simple text
                        container
                    </p>
                </Container>
                <Container text>
                    <Route path="/movies" component={MoviesPage}></Route>
                    <hr/>
                </Container>
                <Footer/>

            </div>
        );
    }
}

export default App;