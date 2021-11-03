import React,{Component} from 'react'
import {HashRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {Home} from './components/Home';
import { NavBar } from './components/common/NavBar';
import { Skills } from './components/Skills';
import { Footer} from './components/common/Footer';
import './index.css';
import { Layout } from './HOC/Layout';

export default class App extends Component{
    render(){
        return(
                <HashRouter>
                    <Layout>
                        <div>
                            <NavBar/>
                            <div className="container-fluid main-container">
                                <div className="row">
                                    <div className='col-lg-12'>
                                    <Switch>
                                        <Route path="/" exact component={Home}/>
                                        <Route path="/react" exact component={Skills}/>
                                        <Route path="/angular" exact component={Skills}/>
                                        <Route path="/redux" exact component={Skills}/>
                                        <Route path="/rxjs" exact component={Skills}/>
                                        <Route path="/jquery" exact component={Skills}/>
                                        <Route path="/javascript" exact component={Skills}/>
                                        <Route path="/typescript" exact component={Skills}/>
                                        <Route path="/spectrum" exact component={Skills}/>
                                        {/* <Route path="*" component={NoMatch}/> */}
                                    </Switch>
                                    </div>
                                </div>
                            </div>
                            <Footer/>
                        </div>
                    </Layout>
                </HashRouter>
        )
    }
}

