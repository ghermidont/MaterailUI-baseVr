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
const image = './1.3.png';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        '& > *': {
            margin: theme.spacing(2),
        },
        padding: theme.spacing(2, 10),
        position:'fixed',
        alignItems: 'center',
        backgroundImage: 'image',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    buttons: {
        borderRadius: '20px',
        height: '100px',
        color: '#000000',
        fontFamily: 'Open Sans',
        width: '100px',
        fontSize: '1rem',
        padding: '3rem 0rem 0rem 0rem',
        backgroundColor: '#FFFFFF',
        boxShadow: '1px 1px 20px 0 #000000',
        textShadow: '1px 1px 20px #000000',
        border: 'solid #337FED 0',
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
            border: 'solid #337FED 0',
            background: '#C8D3D3',
            borderRadius: '20px',
            textDecoration: 'none'
        }
    },
    button1: {
        opacity: '0.9',
        backgroundImage: 'url('+ {image} +')'
    },
    button2: {
        opacity: '0.9'
    },
    button3: {
        opacity: '0.9'
    },
    button4: {
        opacity: '0.9'
    },
    button5: {
        opacity: '0.9'
    },
    button6: {
        opacity: '0.9'
    },
}));


export default function Header() {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types

    return (
        <div className={classes.root} style={{backgroundImage: `url(${image})`}}>
            <Button className={classNames(classes.buttons, classes.button1)} variant="contained">button1</Button>
            <Button className={classNames(classes.buttons, classes.button2)} variant="contained">button2</Button>
            <Button className={classNames(classes.buttons, classes.button3)} variant="contained">button3</Button>
            <Button className={classNames(classes.buttons, classes.button4)} variant="contained">button4</Button>
            <Button className={classNames(classes.buttons, classes.button5)} variant="contained">button5</Button>
            <Button className={classNames(classes.buttons, classes.button6)} variant="contained">button6</Button>
        </div>
    );
}

