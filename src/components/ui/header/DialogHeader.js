import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, {useState} from 'react';
import AuthService from '../../../services/auth.service';

export default function DialogHeader({open, setOpen}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                <Grid container direction="column">
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Confirm Message
                        </Typography>
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField
                            label="Email"
                            id="email"
                            fullWidth
                            value={email}
                            onChange={e =>setEmail(e.target.value)}
                            helperText='{phoneHelper}'
                        />
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField
                            label="Password"
                            id="password"
                            helperText='{phoneHelper}'
                            value={password}
                            onChange={e =>setPassword(e.target.value)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item style={{marginBottom: '0.5em'}}>
                        <TextField
                            label="Phone"
                            helperText='{phoneHelper}'
                            id="phone"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    style={{marginTop: '2em'}}
                    alignItems="center"
                >
                    <Grid item>
                        <Button
                            style={{fontWeight: 300}}
                            color="primary"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={handleLogin}
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
