import React from 'react';
import Helmet from 'react-helmet';
import { Card } from 'react-toolbox/lib/card';
import { Route, Switch } from 'react-router-dom';
// routing
import routes from '../../routes';
// configuration mocks
import { navigation } from './config';
// application shell components
import Header from 'modules/header';
import Footer from 'modules/footer';
// global application styles
import styles from 'modules/shell/styles.css';

function App() {
    return (
        <div>
            <Helmet
                titleTemplate="%s - CNN.com"
                defaultTitle="CNN Apple News Tools Factors Front End"
            >
                <meta name="description" content="CNN Apple News Tools Factors Front End" />
            </Helmet>
            <div className={styles.contentWrapper}>
                <Header links={navigation} />
                <h1>Factors</h1>
                <Card className={styles.paper}></Card>
                <Switch>
                {routes.map((route, i) => (
                    <Route key={i} {...route} />
                ))}
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
