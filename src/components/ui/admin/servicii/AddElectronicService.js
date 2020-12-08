import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import ElectronicService from '../../../../services/electronicService.service';
import Grid from '@material-ui/core/Grid';
import {Button, InputAdornment, OutlinedInput, TextField} from '@material-ui/core';
import React from 'react';


export default function AddElectronicService({setTriggerRow}) {
    const schema = yup.object().shape({
        Denumire: yup.string().min(5).max(450).required(),
        ContTrez: yup.string().min(3).min(5).max(15).required(),
        Suma: yup.number().positive().lessThan(1000).required(),
    });

    const {register, handleSubmit, errors, reset} = useForm({
        resolver: yupResolver(schema)
    });


    function onSubmit(data) {
        console.log(data);
        ElectronicService.postNewElectronicService(data);
        reset();
        setTriggerRow((x)=>x+1);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: 700, marginTop: 40}}>
            <Grid container direction='column'>
                <Grid container direction='column'>
                    <Grid item>
                        <TextField
                            id="Denumire"
                            name="Denumire"
                            label="Denumire"
                            variant="outlined"
                            inputRef={register}
                            fullWidth
                        />
                    </Grid>
                    <Grid item style={{color: '#DB0B18'}}>{errors.Denumire?.message}</Grid>
                </Grid>
                <Grid container direction='row' style={{marginTop: 10}}>

                    <Grid item  direction='column' >
                        <Grid item >
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

                    <Grid item direction='column' style={{flex: 1}} >
                        <Grid item >
                            <TextField
                                id="Cont Trez."
                                name="ContTrez."
                                label="Cont Trez."
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
                        label="Descriere"
                        variant="outlined"
                        multiline
                        rows={4}
                        inputRef={register}
                        fullWidth

                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" type='submit'>
                        Adauga
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
