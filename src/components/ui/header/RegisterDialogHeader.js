import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import AuthService from '../../../services/auth.service';
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
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    city: yup.string().required(),
    postalCode: yup.number().min(4).max(4).required(),
    address: yup.string().required(),
    email: yup.string().email().required(),
});

export default function RegisterDialogHeader({open, setOpen}) {
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
        <Dialog
            style={{zIndex: 1302}}
            open={open}
            onClose={() => setOpen(false)}
        >
            <DialogContent>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            Înregistrare
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {/*Name field*/}
                                    <TextField
                                        autoComplete="fname"
                                        name="nameSurname"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="nameSurname"
                                        defaultValue="Ion Rotaru"
                                        label="Nume, prenume sau denumirea plăților"
                                        autoFocus
                                        ref={register}
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
                                        defaultValue="2002002128888"
                                        ref={register}
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
                                        required
                                        fullWidth
                                        id="email"
                                        label="Adresă email"
                                        name="email"
                                        autoComplete="email"
                                        defaultValue="abc@abc.com"
                                        ref={register}
                                    />
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.email?.message}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {/*Password field*/}
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Parola"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText="Minim 6 caractere."
                                        defaultValue="password"
                                        ref={register}
                                    />
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.password?.message}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {/*City field*/}
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="city"
                                        label="Oras"
                                        id="city"
                                        //autoComplete="current-password"
                                        helperText="oras"
                                        defaultValue="Cahul"
                                        ref={register}
                                    />
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.city?.message}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {/*Postal code*/}
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="postalCode"
                                        label="CodPostal"
                                        id="postalCode"
                                        //autoComplete="current-password"
                                        helperText="4 cifre"
                                        defaultValue="2001"
                                        ref={register}
                                    />
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.postalCode?.message}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {/*Address field*/}
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="address"
                                        label="Adresa"
                                        id="address"
                                        //autoComplete="current-password"
                                        helperText="Minim 6 caractere."
                                        defaultValue="str. Stefan cel Mare 100, sc. 3 ap 50"
                                        ref={register}
                                    />
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.address?.message}</Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Vreau să recepționez notificări privind serviciile noi"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Deja aveți un cont? Autentificați-vă
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </DialogContent>
        </Dialog>
    );
}
