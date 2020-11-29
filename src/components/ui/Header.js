import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
//import Button from '@material-ui/core/Button';
//import Grid from '@material-ui/core/Grid';
//import Icon from '@material-ui/core/Icon';
//import DeleteIcon from '@material-ui/icons/Delete';
//import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import Paper from '@material-ui/core/Paper';

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
        display: 'flex',
        alignItems: 'center',
        minWidth: 300,
        height: '15rem',
        position:'relative',
        alignContent: 'center',
        backgroundImage: `url(${headerBgImage})`,
        backgroundSize: '100% 100%',
        backgroundColor: '#2c3503',
        backgroundRepeat: 'no-repeat',
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
    buttonDiv:{
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '18%',
        right: '18%'
        //transform: 'translate(-50%, -50%)'

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
    bottomDiv: {
        height: '100px',
    }
}));


export default function Header() {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types

    return (
        <React.Fragment>
            <div className={classes.root}>
                <div className={classes.buttonDiv}>
                    <Button className={classNames(classes.buttons, classes.button1)} variant="contained">Certificat de Urbanism</Button>
                    <Button className={classNames(classes.buttons, classes.button2)} variant="contained">Reserve city tour</Button>
                    <Button className={classNames(classes.buttons, classes.button3)} variant="contained">Obtain permits</Button>
                    <Button className={classNames(classes.buttons, classes.button4)} variant="contained">Find the best</Button>
                    <Button className={classNames(classes.buttons, classes.button5)} variant="contained">Return to you</Button>
                    <Button className={classNames(classes.buttons, classes.button6)} variant="contained">Reserve tours</Button>
                </div>
            </div>

        </React.Fragment>
    );
}

