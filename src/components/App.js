import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

import Header from './ui/Header';
import HeaderPlaceholder from './ui/HeaderPlaceholder';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import SignIn from './ui/SignIn';
import SignUp from './ui/SignUp';
import ServiceList from './ui/ServiceList';
import Checkout from './ui/CheckOutForm/Checkout';
import Admin from './ui/admin';
import Grid from '@material-ui/core/Grid';

function App() {
    const [value, setValue] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction="column">
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8}>
                        <BrowserRouter>
                            <Header value={value} setValue={setValue}/>
                            <HeaderPlaceholder value={value} setValue={setValue}/>
                            <Switch>
                                <Route exact path='/' component={ServiceList}/>
                                <Route exact path='/admin' component={Admin}/>
                                <Route exact path='/signin' component={SignIn}/>
                                <Route exact path='/signup' component={SignUp}/>
                                <Route exact path='/pay' component={Checkout}/>Checkout
                            </Switch>
                            <Footer value={value} setValue={setValue}/>
                        </BrowserRouter>
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
            </Grid>
        </ThemeProvider>


    );
}

export default App;
