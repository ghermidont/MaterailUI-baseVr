/* TODO: Make a json object for the services and service. description using this syntax:
    var myObject = {'name':'Kasun', 'address':'columbo','age': '29'}
    var count = Object.keys(myObject).length;
    console.log(count);
 */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import icon1Small from '../../assets/png/small/icon1Small.png';
import icon2Small from '../../assets/png/small/icon2Small.png';
import icon3Small from '../../assets/png/small/icon3Small.png';
import icon4Small from '../../assets/png/small/icon4Small.png';
import heraldicaSmall from '../../assets/png/small/heraldicaSmall.png';
import { useHistory } from 'react-router-dom';

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
const iconLinks = [icon1Small, icon2Small, icon3Small, icon4Small, heraldicaSmall];
//in production will be formed from the entries obtained from the database.
const servicesList = [
    'Achitare impozit pe venit',
    'Eliberare certificatului de urbanism',
    'Inregistrarea autromobil',
    'Inregistrare companie',
    'Obtinere breveta',
    'Inchiriere spatii publice',
    'Certificat sanitar',
    'Cazier juridic',
    'Licenta',
    'Breveta',
    'Inregistrarea dreptului de autor',
    'Asigurarea bunurilor imobile'
];
//Services description array
const serviceDescription = [
    'Lorem dolor sit amet, consectetur adipiscing elit, sed  tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempor  dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut magna aliqua.',
    'Lorem  dolor sit amet, consectetur adipiscing elit, sed do eiusmod  incididunt ut labore et aliqua.',
    'Lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod tempor  dolore magna aliqua.',
    'Lorem amet, consectetur adipiscing elit, sed do eiusmod  ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore magna aliqua.',
    'Lorem  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua.',
    'Lorem sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor, consectetur adipiscing elit, sed do  incididunt ut labore et dolore magna aliqua.',
    'Lorem sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.',
    'Lorem ipsum dolor, consectetur adipiscing elit, sed do eiusmod  aliqua.'
];
//generate random number in a certain range with custom user proofing
const randomNumb = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

//Get random values from the arrays
let randomIconVar = () => iconLinks[randomNumb(1, iconLinks.length)];
let randomService = () => servicesList[randomNumb(1, servicesList.length)];
let randomServDescr = () => serviceDescription[randomNumb(1, serviceDescription.length)];

export default function ServiceList() {
    let history = useHistory();
    const classes = useStyles();

    return (
        <React.Fragment>

            <Container className={classes.cardGrid}>
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
                                    image={randomIconVar()}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2" >

                                        <Box fontWeight={500} textAlign="center">
                                            <Link onClick={() => history.push('/service')} color="inherit">
                                                {randomService()}
                                            </Link>
                                        </Box>
                                    </Typography>
                                    <Typography>

                                        <Box textAlign="center">
                                            <div>
                                                {randomServDescr()}
                                            </div>
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

//TODO: use history push