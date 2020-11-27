import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import footerAdorment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import insta from '../../assets/instagram.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.arcBlue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
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
    mainContainer: {
        position: 'absolute'
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
        width: '4em',
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

export default function Footer(props) {
    const classes = useStyles();

    // eslint-disable-next-line react/prop-types
    const {setValue} = props;


    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify='center' className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={'column'}>
                            <Grid item component={Link} to='/' className={classes.link} onClick={() => {
                                setValue(0);
                            }}>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item component={Link} to='/services' className={classes.link} onClick={() => {
                                setValue(1);
                            }}>Services</Grid>
                            <Grid item className={classes.link}>Custom Software</Grid>
                            <Grid item className={classes.link}>Mobile App</Grid>
                            <Grid item className={classes.link}>Web Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item className={classes.link}>The Revolution</Grid>
                            <Grid item className={classes.link}>Vision</Grid>
                            <Grid item className={classes.link}>Technology</Grid>
                            <Grid item className={classes.link}>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item className={classes.link}>About Us</Grid>
                            <Grid item className={classes.link}>History</Grid>
                            <Grid item className={classes.link}>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item className={classes.link}>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img src={footerAdorment} alt="photo" className={classes.adorment}/>

            <Grid container justify='flex-end' spacing={2} className={classes.socialContainer}>
                <Grid item component={'a'} href='http://www.mail.ru' rel='noreferrer noopener' target="_blank">
                    <img src={facebook} alt="photo" className={classes.icon}/> </Grid>
                <Grid item> <img src={twitter} alt="photo" className={classes.icon}/> </Grid>
                <Grid item> <img src={insta} alt="photo" className={classes.icon}/> </Grid>
            </Grid>
        </footer>
    );

}
