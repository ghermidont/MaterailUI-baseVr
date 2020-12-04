import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/styles/makeStyles';
import {Link} from 'react-router-dom';
import PaymentForm from '../CheckOutForm/PaymentForm';
import {Copyright} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Admin(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let tmp = null;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (value === 0) {
        tmp = <PaymentForm/>;
    } else {
        tmp = <Copyright/>;
    }

    switch (value) {
    case 0:
        tmp = <PaymentForm/>;
        break;
    case 1:
        tmp = <Copyright/>;
        break;
    case 2:
        tmp = <PaymentForm/>;
        break;
    }
    return (
        <>
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Roluri"/>
                    <Tab label="Servicii"/>
                    <Tab label="Primarii"/>
                    <Tab component={Link} to="/" label="Pagina principala"/>
                </Tabs>
            </Paper>
            {tmp}
        </>
    );
}

