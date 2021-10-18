import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes, { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import Footer from './Footer';

const App = () => {
    return (
        <React.Fragment>
            <Router basename={BASENAME}>{renderRoutes(routes)}</Router>
            <Footer/>
        </React.Fragment>
    );
};

export default App;
