import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as _ from '@material-ui/data-grid';
import {DataGrid, SortDirection} from '@material-ui/data-grid';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ElectronicService from '../../../../services/electronicService.service';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {useForm} from 'react-hook-form';
import {Button, InputAdornment, OutlinedInput, TextField} from '@material-ui/core';

export default function ElectronicServices(props) {
    const [rows, setRows] = useState([]);
    const [triggerRow, setTriggerRow] = useState(0);
    const [pageNr, setPageNr] = useState(0);

    useEffect(() => {
        ElectronicService.getListElectronicService().then(
            (response) => {
                setRows(response.data);
                setPageNr(Math.ceil(response.data.length / 3));
                console.log(pageNr);
            }
        );
    }, [triggerRow]);

    const columns = [
        {field: 'id', headerName: 'Id', width: 0,},
        {field: 'name', headerName: 'Name', width: 130},
        {field: 'amount', headerName: 'Amount', width: 130},
        {field: 'treasureAccount', headerName: 'treasureAccount', width: 130},
        {
            field: 'isSelected', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (x) => {
                const onClick = () => {
                };
                return (
                    <IconButton aria-label="edit">
                        <EditIcon/>
                    </IconButton>
                );

            }
        },
        {
            field: 'isSelected2', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (z) => {
                const onClick = () => {
                    ElectronicService.deleteElectronicService(z.row.id);
                    setTriggerRow((x)=>x+1);
                    console.log(z.row.id);

                };
                return (
                    <IconButton aria-label="delete" onClick={onClick}>
                        <DeleteIcon/>
                    </IconButton>
                );
            }
        }
    ];


    return (
        <Grid container direction='column'>
            <Grid container justify='center'>
                <Typography variant="h4" noWrap>
                    Editarea Serviciilor
                </Typography>
            </Grid>
            <Grid container spacing={3} justify='center'>
                <div style={{height: 300, width: 700}}>
                    <DataGrid rows={rows} columns={columns} pageSize={3}  page={pageNr}/>
                </div>
            </Grid>
            <Grid container justify={'center'}>
                <AddElectronicService setTriggerRow={setTriggerRow}/>
            </Grid>
        </Grid>
    );
}

function AddElectronicService({setTriggerRow}) {
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
