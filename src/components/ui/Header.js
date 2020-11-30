import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
//import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import Icon from '@material-ui/core/Icon';
//import DeleteIcon from '@material-ui/icons/Delete';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Paper from '@material-ui/core/Paper';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// https://material-ui.com/components/menus/
// https://material-ui.com/components/buttons/#text-buttons
// https://material-ui.com/components/tabs/
// import Typography from '@material-ui/core/Typography';
// https://material-ui.com/components/app-bar/
// https://mui-treasury.com/
import headerBgImage from '../../assets/png/headerBackgroung.png';
import button1BgImage from '../../assets/png/1.1.png';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        //display: 'flex',
        //alignItems: 'center',
        minWidth: 300,
        //height: '15rem',
        //position:'relative',
        //alignContent: 'center',
        backgroundImage: `url(${headerBgImage})`,
        backgroundSize: '100% 100%',
        backgroundColor: '#2c3503',
        backgroundRepeat: 'no-repeat',
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
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
    //bottomDiv: {
    //height: '100px',
    //}
}));


export default function Header() {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>xs=12 sm=6</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} direction="row" justify="flex-end" alignItems="center">
                        <Button className={classes.authButton} color="primary" variant="outlined" href="#outlined-buttons" startIcon={<ExitToAppIcon />}>Autentificare</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
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

