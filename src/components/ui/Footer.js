import React from 'react';
//import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
//import footerAdorment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import insta from '../../assets/instagram.svg';
import Grid from '@material-ui/core/Grid';
import footerBackground from '../../assets/png/footerBackgroung.png';
import headerBgImage from '../../assets/png/headerBackgroung.png';
import {Box} from '@material-ui/core';
//import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: '100% 100%',
        backgroundColor: '#faf4f2',
        backgroundRepeat: 'no-repeat',
    },
    adorment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '20em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        },
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        width: '1.5em',
        [theme.breakpoints.down('xs')]: {
            width: '2em'
        },
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-5em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-3em',
        },
    }


}));

export default function Footer() {
    const classes = useStyles();

    // eslint-disable-next-line react/prop-types

    return (
        <footer className={classes.footer}>
            <Grid container justify='center'>
                <Grid xs={4} item className={classes.gridItem}>
                    <Box>Address: or. Ciorescu, str. Macaroane cu cirnat nr. 7</Box>
                </Grid>
                <Grid xs={4} item className={classes.gridItem}>
                    <Box>Linkuri utile</Box>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                    <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
                        <Grid item component={'a'} href='http://www.mail.ru' rel='noreferrer noopener' target="_blank">
                            <img src={facebook} alt="photo" className={classes.icon}/> </Grid>
                        <Grid item> <img src={twitter} alt="photo" className={classes.icon}/> </Grid>
                        <Grid item> <img src={insta} alt="photo" className={classes.icon}/> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    );

}
