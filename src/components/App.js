import React, {useEffect, useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import Header from './ui/header/Header';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import SignIn from './ui/SignIn';
import SignUp from './ui/SignUp';
import ServiceList from './ui/ServiceList';
import Checkout from './ui/CheckOutForm/Checkout';
import Admin from './ui/admin/Admin';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import AuthService from '../services/auth.service';
import Constants from '../services/constants';


const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#ffffff',
    },

}));


function App() {
    const classes = useStyles();
    const [role, setRole] = useState('');

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        setRole(user[Constants.role]);
        // info1@test.com  Ak.123
    }, []);

    return (
        <ThemeProvider theme={theme}>
            {console.log(role)}
            <Grid container direction="column" >
                <Grid item container>
                    <Grid className={classes.root} item xs={0} sm={2} />
                    <Grid item xs={12} sm={8} style={{border: 'solid 1px #707070'}}>

                        <BrowserRouter>
                            <Header role={role}/>

                            <Switch>
                                <Route exact path='/' component={ServiceList}/>
                                <Route exact path='/admin' component={Admin}/>
                                <Route exact path='/signin' component={SignIn}/>
                                <Route exact path='/signup' component={SignUp}/>
                                <Route exact path='/pay' component={Checkout}/>Checkout
                            </Switch>
                            <Footer />
                        </BrowserRouter>

                    </Grid>
                    <Grid className={classes.root} item xs={0} sm={2} />
                </Grid>
            </Grid>
        </ThemeProvider>


    );
}

export default App;
