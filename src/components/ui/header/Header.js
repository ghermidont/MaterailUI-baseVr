import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';
import headerBgImage from '../../../assets/png/headerBackgroung.png';
import button1BgImage from '../../../assets/png/1.1.png';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
//import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
//https://github.com/jcoreio/material-ui-popup-state
import Typography from '@material-ui/core/Typography';
import primariaHeraldica from '../../../assets/png/5.1.png';
import DialogHeader from './DialogHeader';
import {Link} from 'react-router-dom';
import AuthService from '../../../services/auth.service';
import CountrySelect from './primariasMenu';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'sticky',
        // top MUST be specified in order sticky to work
        top: 0,
        flexGrow: 1,
        minWidth: 500,
        backgroundImage: `url(${headerBgImage})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    },
    primariaAndSymbol:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    gridButtons:{
        margin: '0 auto',
        display: 'block',
        textAlign: 'center'
    },
    icon: {
        width: '3em',
        [theme.breakpoints.down('xs')]: {
            width: '2em'
        },
    },
    buttons: {
        margin: theme.spacing(1),
        backgroundSize: '1.5rem',
        backgroundPosition: '50% 20%',
        borderRadius: '20px',
        height: '6rem',
        width: '6rem',
        fontSize: '0.6rem',
        padding: '3rem 0rem 0rem 0rem',
        backgroundColor: '#FFFFFF',
        border: 'solid #337FED 0',
        textAlign: 'center',
        backgroundRepeat: 'no-repeat',
        top: 20
    },
    authButton:{
        borderRadius: '20px',
        float: 'right',
        color: 'white'
    },
    button1: {
        backgroundImage: `url(${button1BgImage})`,
    },
    button2: {
        backgroundImage: `url(${button1BgImage})`
    },
    button3: {
        backgroundImage: `url(${button1BgImage})`
    },
    button4: {
        backgroundImage: `url(${button1BgImage})`
    },
    button5: {
        backgroundImage: `url(${button1BgImage})`
    },
    button6: {
        backgroundImage: `url(${button1BgImage})`
    },
}));

export default function Header({role}) {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types
    const [open, setOpen] = useState(false);

    let adminOrNot = role ==='Admin' ?
        <Button
            component={Link}
            to="/admin"
            className={classes.authButton}
            color="primary"
            variant="outlined"
            startIcon={<ExitToAppIcon/>}>
            Panel Administrare </Button>
        :
        <Button
            component={Link}
            to="/pay"
            className={classes.authButton}
            color="primary"
            variant="outlined"
            startIcon={<ExitToAppIcon/>}>
            Cabinet Personal</Button>;

    adminOrNot = (typeof role === 'undefined') ? null : adminOrNot;

    const loginLogout = (typeof role === 'undefined') ?
        <Button
            className={classes.authButton}
            color="primary"
            variant="outlined"
            startIcon={<ExitToAppIcon/>}
            onClick={() => setOpen(true)}>
            Autentificare</Button>
        :
        <Button
            className={classes.authButton}
            color="primary"
            variant="outlined"
            startIcon={<ExitToAppIcon/>}
            onClick={() => AuthService.logout()}>
            Vă deconectați</Button>;

    return (
        <React.Fragment>
            {console.log(role)}
            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <CountrySelect />
                    </Grid>
                    <Grid item xs={12} sm={6} direction="row" justify="flex-end" alignItems="center">
                        {loginLogout}
                        {adminOrNot}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div">
                            <div className={classes.primariaAndSymbol}>
                                <img src={primariaHeraldica} alt="photo" className={classes.icon}/>
                                <Box color="white" fontWeight={500} textAlign="center" fontSize={50} m={1}>Primaria Ciorescu</Box>
                            </div>
                            <Box color="white" textAlign="center">Portalul serviciilor primariei</Box>
                        </Typography>
                    </Grid>

                    <Grid className={classes.gridButtons} item xs={12} >
                        <Button className={classNames(classes.buttons, classes.button1)} variant="contained">Certificat de Urbanism</Button>
                        <Button className={classNames(classes.buttons, classes.button2)} variant="contained">Reserve city tour</Button>
                        <Button className={classNames(classes.buttons, classes.button3)} variant="contained">Obtain permits</Button>
                        <Button className={classNames(classes.buttons, classes.button4)} variant="contained">Find the best</Button>
                        <Button className={classNames(classes.buttons, classes.button5)} variant="contained">Return to you</Button>
                        <Button className={classNames(classes.buttons, classes.button6)} variant="contained">Reserve tours</Button>
                    </Grid>
                </Grid>
            </div>
            <DialogHeader open={open} setOpen={setOpen}/>
        </React.Fragment>
    );
}

