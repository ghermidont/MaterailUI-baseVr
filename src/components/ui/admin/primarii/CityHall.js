import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {DataGrid} from '@material-ui/data-grid';
import ElectronicService from '../../../../services/electronicService.service';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import * as yup from 'yup';
import {Accordion, AccordionDetails, AccordionSummary, Button, TextField} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';


const gridSortModel = [
    {
        field: 'id',
        sort: 'desc'// as SortDirection,
    },
];

const schema = yup.object().shape({
    Name: yup.string().min(5).max(450).required(),
    City: yup.string().min(5).max(200).required(),
    ContTrez: yup.string().min(3).min(5).max(15).required(),
    Suma: yup.number().positive().lessThan(1000).required(),
});

export default function CityHall(props) {
    const [rows, setRows] = useState([]);
    const [triggerRow, setTriggerRow] = useState(0);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState();


    const {register, handleSubmit, setValue, errors, reset} = useForm({
        resolver: yupResolver(schema)
    });


    useEffect(() => {
        ElectronicService.getListElectronicService().then(
            (response) => {
                setRows(response.data);
            }
        );
    }, [triggerRow]);

    const columns = [
        {field: 'id', headerName: 'Id', width: 0,},
        {field: 'name', headerName: 'Name', width: 130},

        {
            field: 'isSelected', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (z) => {
                const onClick = () => {
                    setOpen(true);
                    setId(z.row.id);
                };
                return (
                    <IconButton aria-label="edit" onClick={onClick}>
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
                    setTriggerRow((x) => x + 1);
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
    const onSubmit = data => {
        console.log(data);


    };

    return (
        <>
            <Grid container justify={'center'}>
                <form onSubmit={handleSubmit(onSubmit)} style={{width: 700, marginTop: 40}}>

                    <Grid item direction='column'>
                        <Grid container justify='center'>
                            <Typography variant="h4" noWrap>
                                Editarea Primarii
                            </Typography>
                        </Grid>
                        <Grid container justify='center'>
                            <div style={{height: 300, width: '100%'}}>
                                <DataGrid rows={rows} columns={columns} pageSize={3} sortModel={gridSortModel}/>
                            </div>
                        </Grid>
                        <Grid container justify={'center'}>
                        </Grid>

                        <Grid item container direction={'column'} style={{marginTop: 10}}>
                            <Grid item direction='column'>
                                <Grid item>
                                    <TextField
                                        id="Name"
                                        label='Nume primarie'
                                        name="Name"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{color: '#DB0B18'}}>{errors.ContTrez?.message}</Grid>
                            </Grid>

                            <Grid container direction='row'>
                                <Grid item direction='column' style={{flex: 1}}>
                                    <Grid item>
                                        <TextField
                                            id="City"
                                            label='Oras'
                                            name="City"
                                            variant="outlined"
                                            inputRef={register}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.Suma?.message}</Grid>
                                </Grid>
                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="CodBancar"
                                            label='Cod Bancar'
                                            name="CodBancar"
                                            variant="outlined"
                                            inputRef={register}

                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.ContTrez?.message}</Grid>
                                </Grid>

                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="CodPostal"
                                            label='Cod Postal'
                                            name="CodPostal"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.ContTrez?.message}</Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction='column'>
                                <Grid item>
                                    <TextField
                                        id="StreetHouseNumber"
                                        name="StreetHouseNumber"
                                        label='Strada si numar bloc'
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{color: '#DB0B18'}}>{errors.Etichet?.message}</Grid>
                            </Grid>

                            <Grid container direction='row'>
                                <Grid item direction='column' style={{flex: 1}}>
                                    <Grid item>
                                        <TextField
                                            id="Phone"
                                            label='Numar telefon'
                                            name="Phone"
                                            variant="outlined"
                                            inputRef={register}
                                            fullWidth

                                        />
                                    </Grid>
                                    <Grid item style={{marginRight: 10, color: '#DB0B18'}}>{errors.Suma?.message}</Grid>
                                </Grid>
                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="Email"
                                            label='Email'
                                            name="Email"
                                            variant="outlined"
                                            inputRef={register}

                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.ContTrez?.message}</Grid>
                                </Grid>

                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="Web"
                                            label='Web'
                                            name="Web"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container style={{marginTop: 10}}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Adauga extra detalii</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{width: 700}}>
                                    <Grid container direction={'column'}>
                                        <Grid item container direction='row'>
                                            <Grid item direction='column' style={{flex: 1}}>
                                                <Grid item>
                                                    <TextField
                                                        id="Phone"
                                                        label='Numar telefon'
                                                        name="Phone"
                                                        variant="outlined"
                                                        inputRef={register}
                                                        fullWidth

                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Email"
                                                        label='Email'
                                                        name="Email"
                                                        variant="outlined"
                                                        inputRef={register}

                                                    />
                                                </Grid>
                                            </Grid>

                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Web"
                                                        label='Web'
                                                        name="Web"
                                                        variant="outlined"
                                                        inputRef={register}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction='row' style={{marginTop:10}}>
                                            <Grid item direction='column' style={{flex: 1}}>
                                                <Grid item>
                                                    <TextField
                                                        id="Phone"
                                                        label='Numar telefon'
                                                        name="Phone"
                                                        variant="outlined"
                                                        inputRef={register}
                                                        fullWidth

                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Email"
                                                        label='Email'
                                                        name="Email"
                                                        variant="outlined"
                                                        inputRef={register}

                                                    />
                                                </Grid>
                                            </Grid>

                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Web"
                                                        label='Web'
                                                        name="Web"
                                                        variant="outlined"
                                                        inputRef={register}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
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
            </Grid>
        </>
    );
}

