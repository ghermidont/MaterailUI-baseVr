import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import makeStyles from '@material-ui/styles/makeStyles';
import {Link} from 'react-router-dom';
import PaymentForm from '../CheckOutForm/PaymentForm';
//import {Copyright} from '@material-ui/icons';
//import Roluri from './roluri/Roles';
import Roles from './roluri/Roles';
import ElectronicServices from './servicii/ElectronicServices';
import CityHall from './primarii/CityHall';
import Iban from './iban/Iban';

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

    switch (value) {
    case 0:
        tmp = <Roles/>;
        break;
    case 1:
        tmp = <ElectronicServices/>;
        break;
    case 2:
        tmp = <CityHall/>;
        break;
    case 3:
        tmp = <Iban/>;
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
                    <Tab label="Iban"/>
                    <Tab component={Link} to="/" label="Pagina principala"/>
                </Tabs>
            </Paper>
            {tmp}
        </>
    );
}

