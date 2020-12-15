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
                Vasea&apos;s site! Do not touch it!
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
    userEmail: yup.string().email().required(),
    password: yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, 'Password can only contain Latin letters.')
});

export default function LogInForm() {
    let history = useHistory();
    const onSubmit = data => console.log(data);
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
                <Typography component="h1" variant="h5">
                            Autentificare
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        fullWidth 
                        label="Poșta electronică"
                        name="userEmail"
                        value={email}
                        autoFocus
                        inputRef={register}
                    />
                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>
                        {errors.userEmail?.message}
                    </Grid>

                    <TextField 
                        variant="outlined" 
                        margin="normal" 
                        fullWidth 
                        name="password" 
                        label="Parola"
                        type="password" 
                        value={password}
                        inputRef={register}
                    />
                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>
                        {errors.password?.message}
                    </Grid>

                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Țâni-mă minti!"/>

                    <Grid item container style={{marginTop: '2em'}} alignItems="center">
                        <Grid item sx={6}>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleLogin}>Logare</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button style={{fontWeight: 300}} color="primary" onClick={() => history.push('/')}>Anulare</Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Ați uitat parola?</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={() => history.push('/register')}>Nu aveți cont? Înregistrați-vă!</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <Box mt={8}>
                <Copyright />
            </Box>

        </Container>

    );
}
