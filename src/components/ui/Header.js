import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Box from '@material-ui/core/Box';
import headerBgImage from '../../assets/png/headerBackgroung.png';
import button1BgImage from '../../assets/png/1.1.png';
import primariaSign from '../../assets/png/5.1.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
//https://github.com/jcoreio/material-ui-popup-state
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        minWidth: 300,
        backgroundImage: `url(${headerBgImage})`,
        backgroundSize: '100% 100%',
        backgroundColor: '#faf4f2',
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
        //margin: '9rem 1rem 10rem 0rem',
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

export default function Header() {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                        Open Menu
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Cake</MenuItem>
                                        <MenuItem onClick={popupState.close}>Death</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Grid>
                    <Grid item xs={12} sm={6} direction="row" justify="flex-end" alignItems="center">
                        <Button className={classes.authButton} color="primary" variant="outlined" href="#outlined-buttons" startIcon={<ExitToAppIcon />}>Autentificare</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="div">
                            <div className={classes.primariaAndSymbol}>
                                <Avatar alt="Remy Sharp" src={{primariaSign}} />
                                <Box textAlign="center" fontSize={30} m={1}>Primaria Ciorescu</Box>
                            </div>
                            <Box textAlign="center" >Portalul serviciilor primariei</Box>
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
        </React.Fragment>
    );
}

