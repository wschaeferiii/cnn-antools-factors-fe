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
// HEADER REMAINS INSIDE BECAUSE IT DEPENDS ON CONTAINER WIDTH FOR CENTERING OF IT'S CONTENTS

function App() {
    return (
        <shell-container>
            <background-layer1></background-layer1>
            <background-layer2></background-layer2>
            <content-container>
                <Helmet
                    titleTemplate="%s - CNN.com"
                    defaultTitle="CNN Apple News Tools Factors Front End"
                >
                    <meta name="description" content="CNN Apple News Tools Factors Front End" />
                </Helmet>
                <Header links={navigation} />
                <h1>Factors</h1>
                <Card className={styles.card}></Card>
                <Switch>
                    {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Switch>
            </content-container>
            <Footer/>
        </shell-container>
    );
}

export default App;
