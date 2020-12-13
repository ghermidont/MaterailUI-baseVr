import React from 'react';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import CardImage from '../../assets/png/small/icon1Small.png';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        //backgroundImage: 'linear-gradient(to top, #faf4f2, rgba(250, 238, 233, 0) 32%, #fae0d7)',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        backgroundColor: '#e1dfd6',
        '&:hover': {
            background: '#cccbc4'
        },

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: '4rem',
        backgroundPosition: '50% 80%',

    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ServiceList() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <Container className={classes.cardGrid}>
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2" >
                            <Box fontWeight={500} textAlign="center" fontSize={30}>Verificati toate<br />serviciile</Box>
                        </Typography>
                    </Grid>

                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={CardImage}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        <Box fontWeight={500} textAlign="center">
                                            <Link href="/" onClick={() => {console.info('I\'m a button.');}} color="inherit">
                                                Denumirea Serviciului
                                            </Link>
                                        </Box>
                                    </Typography>
                                    <Typography>
                                        <Box textAlign="center">
                                            <Link href="#" onClick={() => {console.info('I\'m a button.');}} color="inherit" variant="body2">
                                                Descrierea Serviciului
                                            </Link>
                                        </Box>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
           
        </React.Fragment>
    );
}