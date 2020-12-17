import React, {useEffect, useState} from 'react';
import {useFieldArray, useForm} from 'react-hook-form';
import {Grid, ListItem, TextField} from '@material-ui/core';
import List from '@material-ui/core/List';
import ElectronicService from '../../../../services/electronicService.service';
import {Autocomplete} from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import RefreshIcon from '@material-ui/icons/Refresh';
import SendIcon from '@material-ui/icons/Send';
//import require from 'iban';


export default function AddIban() {
    const {register, control, handleSubmit, reset, watch, errors} = useForm({
        defaultValues: {
            test: [{firstName: 'aaa', lastName: 'bbb'}]
        }
    });
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray(
        {
            control,
            name: 'test'
        }
    );

    const [electronicServices, setElectronicServices] = useState([]);

    //const validateIban = (str) => require('iban').isValid(str);

    useEffect(() => {
        ElectronicService.getListElectronicService().then(
            (response) => {
                setElectronicServices(response.data);
            }
        );
    }, []);


    const onSubmit = (data) => console.log('data', data);


    return (
        <Grid container>
            <Grid item container justify={'center'}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <List>
                        {fields.map((item, index) => {
                            return (
                                <ListItem key={item.id}>
                                    <Grid container direction={'column'}>
                                        <Grid item container>
                                            <TextField
                                                size={'small'}
                                                label={'Iban'}
                                                name={`test[${index}].Name`}
                                                variant="outlined"
                                                style={{width: 270}}
                                                inputRef={register({required: true, })}
                                            />
                                            <Autocomplete
                                                size={'small'}
                                                id="combo-box-demo"
                                                options={electronicServices}
                                                getOptionLabel={(option) => option.label}
                                                style={{width: 250}}

                                                onChange={(event, value, reason, details) => console.log(details)}
                                                renderInput={(params) =>
                                                    <TextField {...params} label="eServiciu" variant="outlined"
                                                        name={`test[${index}].ElectronicServiceId`}
                                                        inputRef={register}/>}
                                            />
                                            <IconButton aria-label="edit" onClick={() => remove(index)}>
                                                <DeleteForeverIcon/>
                                            </IconButton>
                                        </Grid>
                                        <Grid item container style={{color: 'rgb(211,47,47)'}}>
                                            {errors?.test && errors.test[index] && errors.test[index].Name.type ==='validate' && 'ValidIban'}
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            );
                        })}
                    </List>
                    <section>
                        <IconButton aria-label="edit" onClick={() => {append();}}>
                            <PlusOneIcon/>
                        </IconButton>

                        <IconButton aria-label="edit" onClick={() =>
                            reset({
                                test: [{firstName: 'xxx', lastName: 'xxx'}]
                            })
                        }>
                            <RefreshIcon/>
                        </IconButton>

                        <IconButton type="submit">
                            <SendIcon/>
                        </IconButton>
                    </section>
                </form>
            </Grid>

        </Grid>
    );
}
