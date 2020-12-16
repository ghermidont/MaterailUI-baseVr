import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import AuthService from '../services/auth.service';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                {/* eslint-disable-next-line */}
                Author Vasile Moraru.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const schema = yup.object().shape({
    nameSurname:yup.string().required(),
    IdNumber:yup.number().min(13).max(13).required(),
    sum: yup.number().min(4).max(4).required(),

});

export default function ServicePage() {
    let history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();


    const handleLogin = (e) => {
        e.preventDefault();


        AuthService.login(email, password).then(
            () => {
                // props.history.push("/profile");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
            }
        );
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" >
                    Completați detaliile <br/> serviciului
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            {/*Name field*/}
                            <TextField
                                name="nameSurname"
                                variant="outlined"
                                fullWidth
                                label="Nume, prenume sau denumirea plăților"
                                autoFocus
                                inputRef={register}
                            />
                            <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.nameSurname?.message}</Grid>
                        </Grid>
                        <Grid item xs={12}>
                            {/*Id number field*/}
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="IdNumber"
                                label="IDNP/IDNO-ul platitorului"
                                name="IdNumber"
                                inputRef={register}
                            />
                            <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.IdNumber?.message}</Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Persoană fizică"
                            />
                            <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.email?.message}</Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Persoană juridică"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/*Email field*/}
                            <TextField
                                variant="outlined"
                                fullWidth
                                label="Suma"
                                name="sum"
                                inputRef={register}
                            />
                            <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.email?.message}</Grid>
                        </Grid>

                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Achita
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Salveaza
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Inapoi
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
