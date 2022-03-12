import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News, Events, StatusUpdates} from './components';

import './App.css';


const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails />
                            </Route>
                            <Route exact path="/news">
                                <News />
                            </Route>
                            {/* <Route exact path="/events">
                                <Events />
                            </Route>
                            <Route exact path="/statusupdates">
                                <StatusUpdates />
                            </Route> */}
                        </Switch>
                    </div>
                </Layout>
                <div className="footer" >
                    <Typography.Title level={4} style={{color:'white', textAlign: 'center'}}>
                        Sikka-study <br/>
                        <p class="footer-heart">
  Made with <g-emoji class="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
<img class="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"/></g-emoji> by Musketeers
</p>
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/news">News</Link>
                        {/* <Link to="/events">Events</Link>
                        <Link to="/statusupdates">Updates</Link> */}
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App