import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DialogRoles from './DialogRoles';
const useStyles = makeStyles({
    root: {
        minWidth: 200,
    },
});

export default function OutlinedCard({role}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);

    return (
        <Card className={classes.root} variant="outlined" style={{marginBottom: 5}}>
            <Grid container direction={'column'} justify={'center'}>

                <CardContent>
                    <Grid container justify={'center'}>
                        <Typography variant="h5" gutterBottom>
                            {role}
                        </Typography>
                    </Grid>

                </CardContent>
                <CardActions>
                    <Grid container justify={'center'}>
                        <Button
                            size="small"
                            onClick={() => setOpen(true)}>Vezi</Button>

                        {role === 'Admin' ? null : <Button
                            size="small"
                            onClick={() => {
                                setOpen(true);
                                setEdit(true);
                            }}>Editeaza</Button>}
                    </Grid>
                </CardActions>
            </Grid>
            <DialogRoles open={open} setOpen={setOpen} role={role} edit={edit} setEdit={setEdit}/>
        </Card>

    );
}
