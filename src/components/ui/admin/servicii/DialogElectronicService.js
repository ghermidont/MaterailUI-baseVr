import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, {useEffect} from 'react';
import ElectronicServices from '../../../../services/electronicService.service';
import {useForm} from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import {Button, InputAdornment, OutlinedInput, TextField} from '@material-ui/core';
import {yupResolver} from '@hookform/resolvers/yup';
import Typography from '@material-ui/core/Typography';


export default function DialogElectronicService({open, setOpen, id, setId, schema, setTriggerRow}) {

    const {register, handleSubmit, setValue, errors, reset} = useForm({
        resolver: yupResolver(schema)
    });

    console.log(id);
    useEffect(() => {
        ElectronicServices.getElectronicServiceById(id).then(
            (response) => {
                console.log(response.data);
                setValue('Denumire', response.data.name);
                setValue('Suma', response.data.amount);
                setValue('ContTrez.', response.data.treasureAccount);
                setValue('Descriere', response.data.details);
                setValue('Etichet', response.data.label);
            });
    }, [id]);

    const onSubmit = data => {
        console.log(data);
        ElectronicServices.updateElectronicService(id, data).then(() => {
            setTriggerRow(x => x + 1);
            setOpen(false);
            setId(0);
        }
        );

    };

    return (
        <Dialog
            style={{zIndex: 1302}}
            open={open}
            onClose={() => {
                setOpen(false);
                setId(0);
            }}
            maxWidth={'lg'}
        >
            <DialogContent style={{height: 600}}>

                <form onSubmit={handleSubmit(onSubmit)} style={{width: 700, marginTop: 40}}>
                    <Grid container direction='column'>
                        <Grid container justify='center'>
                            <Typography variant="h5" noWrap>
                                Editare serviciu
                            </Typography>
                        </Grid>
                        <Grid container direction='column'>
                            <Grid item>
                                <TextField
                                    id="Etichet"
                                    name="Etichet"
                                    variant="outlined"
                                    inputRef={register}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{color: '#DB0B18'}}>{errors.Etichet?.message}</Grid>

                            <Grid item style={{marginTop:10}} >
                                <TextField
                                    id="Denumire"
                                    name="Denumire"
                                    variant="outlined"
                                    inputRef={register}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{color: '#DB0B18'}}>{errors.Denumire?.message}</Grid>
                        </Grid>
                        <Grid container direction='row' style={{marginTop: 10}}>

                            <Grid item direction='column'>
                                <Grid item>
                                    <OutlinedInput
                                        id="Suma"
                                        name="Suma"
                                        type="number"
                                        startAdornment={<InputAdornment position="start">Lei</InputAdornment>}
                                        variant="outlined"
                                        inputRef={register}
                                        defaultValue={0}
                                    />
                                </Grid>
                                <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.Suma?.message}</Grid>
                            </Grid>

                            <Grid item direction='column' style={{flex: 1}}>
                                <Grid item>
                                    <TextField
                                        id="Cont Trez."
                                        name="ContTrez."
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{color: '#DB0B18'}}>{errors.ContTrez?.message}</Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: 10}}>
                            <TextField
                                id="Descriere"
                                name="Descriere"
                                variant="outlined"
                                multiline
                                rows={4}
                                inputRef={register}
                                fullWidth

                            />
                        </Grid>
                        <Grid item container justify={'center'} style={{marginTop: 20}}>
                            <Button variant="contained" color="primary" type='submit' style={{marginRight: 60,}}>
                                Modifica
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => {
                                setOpen(false);
                                setId(0);
                                reset();
                            }}>
                                Anuleaza
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </DialogContent>
        </Dialog>
    );
}
