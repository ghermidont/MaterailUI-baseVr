import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        padding: theme.spacing(3, 2),
        marginBottom: 'auto',

    },
    header: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        //,
        //color: 'primary',
        //maxWidth: '80%',
        //justify: 'center'
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '1em'
        }
    },
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: '5em'
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
    },
    logoContainer: {
        padding: '0px',
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    menu: {
        backgroundColor: theme.palette.common.arcBlue,
        color: 'white',
        borderRadius: '10px'
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        }
    }

}));


export default function Header(props) {
    const classes = useStyles();
    // eslint-disable-next-line react/prop-types
    const {value, setValue} = props;

    useEffect(() => {
        if (window.location.pathname === '/' && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === '/services' && value !== 1) {
            setValue(1);
        } else if (window.location.pathname === '/revolution' && value !== 2) {
            setValue(2);
        } else if (window.location.pathname === '/about' && value !== 3) {
            setValue(3);
        }
    }, );

    return (
        <div className={classes.root}>
            <Button variant="contained">Default</Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
        </div>
    );
}

