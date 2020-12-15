import React, {useEffect, useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import CityHallService from '../../../services/cityHall.service';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import {Accordion, AccordionDetails, AccordionSummary, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {DataGrid} from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

const gridSortModel = [
    {
        field: 'id',
        sort: 'desc'// as SortDirection,
    },
];
const schema = yup.object().shape({
    Name: yup.string().min(5).max(450).required(),
    City: yup.string().min(5).max(200).required(),
    PostalCode: yup.string().min(5).max(200).required(),
    StreetHouseNumber: yup.string().min(5).max(200).required(),
    Phone0: yup.string().min(6).max(15).required(),
    Email0: yup.string().email().required(),
    Email1: yup.string().email(),
    Email2: yup.string().email()
});

export default function CityHall(props) {
    const {register, handleSubmit, errors, reset, setValue, watch} = useForm({
        resolver: yupResolver(schema)
    });
    let myRef = useRef();
    const [rows, setRows] = useState([]);
    const [trigger, setTrigger] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [rowId, setRowId] = useState(null);
    const watchAllFields = watch();

    useEffect(() => {
        CityHallService.getListCityHall().then(
            (response) => {
                setRows(response.data);
            }
        );
    }, [trigger]);


    const populateCityHallForm = (data) => {
        setValue('Name', data.name);
        setValue('BanckAccount', data.banckAccount);
        setValue('StreetHouseNumber', data.addressCityHall[0]?.streetHouseNumber);
        setValue('City', data.addressCityHall[0]?.city);
        setValue('PostalCode', data.addressCityHall[0]?.postalCode);
        setValue('Phone0', data.addressCityHall[0]?.phone0);
        setValue('Phone1', data.addressCityHall[0]?.phone1);
        setValue('Phone2', data.addressCityHall[0]?.phone2);
        setValue('Email0', data.addressCityHall[0]?.email0);
        setValue('Email1', data.addressCityHall[0]?.email1);
        setValue('Email2', data.addressCityHall[0]?.email2);
        setValue('Web0', data.addressCityHall[0]?.web0);
        setValue('Web1', data.addressCityHall[0]?.web1);
        setValue('Web2', data.addressCityHall[0]?.web2);

    };

    const columns = [
        {field: 'id', headerName: 'Id', width: 0,},
        {field: 'name', headerName: 'Name', width: 130},

        {
            field: 'isSelected', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (z) => {
                const onClick = () => {
                    CityHallService.getCityHallById(z.row.id).then(
                        response => {
                            setRowId(z.row.id),
                            reset(),
                            populateCityHallForm(response.data),
                            setEditMode(true);
                            window.scrollTo({behavior: 'smooth', top: myRef.current.offsetTop});
                        }
                    );
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
                    CityHallService.deleteCityHallById(z.row.id);
                    setTrigger(prev => prev + 1);

                };
                return (
                    <IconButton aria-label="delete" onClick={onClick}>
                        <DeleteIcon/>
                    </IconButton>
                );
            }
        }
    ];

    const onSubmit = (data,e) => {


        console.log(data);
        const AddressContactCityHall1 = {
            City: data.City,
            StreetHouseNumber: data.StreetHouseNumber,
            PostalCode: data.PostalCode,
            Phone0: data.Phone0,
            Phone1: data.Phone1,
            Phone2: data.Phone2,
            Email0: data.Email0,
            Email1: data.Email1,
            Email2: data.Email2,
            Web0: data.Web0,
            Web1: data.Web1,
            Web2: data.Web2
        };
        console.log(AddressContactCityHall1);
        const data1 = {
            Name: data.Name,
            BanckAccount: data.BanckAccount,
            AddressCityHall: [AddressContactCityHall1]
        };
        console.log(data1);
        console.log( );

        e.target.getElementsByClassName('Modifica').length ?
            CityHallService.updateCityHall(rowId, data1).then(
                response => {
                    setTrigger(prev => prev + 1);
                    setEditMode(false);
                    reset();

                }
            )
            :
            CityHallService.postNewCityHall(data1).then(
                response => {
                    setTrigger(prev => prev + 1);
                    reset();
                }
            );


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
                    </Grid>

                    <Grid container justify={'center'}>

                        {/*Form*/}
                        <Grid item container direction={'column'} style={{marginTop: 10}}>
                            <Grid item direction='column' style={{marginTop: 10}}>
                                <Grid item>
                                    {console.log('RENDER')}
                                    <TextField
                                        id="Name"
                                        label={watchAllFields.Name && editMode ? undefined : 'Nume primarie'}
                                        name="Name"
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{color: '#DB0B18'}}>{errors.Name?.message}</Grid>
                            </Grid>

                            <Grid container direction='row' style={{marginTop: 10}}>
                                <Grid item direction='column' style={{flex: 1}}>
                                    <Grid item>
                                        <TextField
                                            id="City"
                                            label={watchAllFields.City && editMode ? undefined : 'Oras'}
                                            name="City"
                                            variant="outlined"
                                            inputRef={register}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.City?.message}</Grid>
                                </Grid>
                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="BanckAccount"
                                            label={watchAllFields.BanckAccount && editMode ? undefined : 'Cod Bancar'}
                                            name="BanckAccount"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="PostalCode"
                                            label={watchAllFields.PostalCode && editMode ? undefined : 'Cod Postal'}
                                            name="PostalCode"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.PostalCode?.message}</Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction='column' style={{marginTop: 10}}>
                                <Grid item>
                                    <TextField
                                        id="StreetHouseNumber"
                                        name="StreetHouseNumber"
                                        label={watchAllFields.StreetHouseNumber && editMode ? undefined : 'Strada si numar bloc'}
                                        variant="outlined"
                                        inputRef={register}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item style={{color: '#DB0B18'}}>{errors.StreetHouseNumber?.message}</Grid>
                            </Grid>

                            <Grid container direction='row' style={{marginTop: 10}}>
                                <Grid item direction='column' style={{flex: 1}}>
                                    <Grid item>
                                        <TextField
                                            id="Phone0"
                                            label={watchAllFields.Phone0 && editMode ? undefined : 'Numar telefon'}
                                            name="Phone0"
                                            variant="outlined"
                                            inputRef={register}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.Phone0?.message}</Grid>
                                </Grid>
                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="Email0"
                                            label={watchAllFields.Email0 && editMode ? undefined : 'Email'}
                                            name="Email0"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                    <Grid item style={{color: '#DB0B18'}}>{errors.Email0?.message}</Grid>
                                </Grid>

                                <Grid item direction='column'>
                                    <Grid item>
                                        <TextField
                                            id="Web0"
                                            label={watchAllFields.Web0 && editMode ? undefined : 'Web'}
                                            name="Web0"
                                            variant="outlined"
                                            inputRef={register}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*Accordion*/}
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
                                                        id="Phone1"
                                                        label={watchAllFields.Phone1 && editMode ? undefined : 'Numar telefon'}
                                                        name="Phone1"
                                                        variant="outlined"
                                                        inputRef={register}
                                                        fullWidth

                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Email1"
                                                        label={watchAllFields.Email1 && editMode ? undefined : 'Email'}
                                                        name="Email1"
                                                        variant="outlined"
                                                        inputRef={register}
                                                    />
                                                </Grid>
                                            </Grid>

                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Web1"
                                                        label={watchAllFields.Web1 && editMode ? undefined : 'Web'}
                                                        name="Web1"
                                                        variant="outlined"
                                                        inputRef={register}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction='row' style={{marginTop: 10}}>
                                            <Grid item direction='column' style={{flex: 1}}>
                                                <Grid item>
                                                    <TextField
                                                        id="Phone2"
                                                        label={watchAllFields.Phone2 && editMode ? undefined : 'Numar telefon'}
                                                        name="Phone2"
                                                        variant="outlined"
                                                        inputRef={register}
                                                        fullWidth

                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Email2"
                                                        label={watchAllFields.Email2 && editMode ? undefined : 'Email'}
                                                        name="Email2"
                                                        variant="outlined"
                                                        inputRef={register}
                                                    />
                                                </Grid>
                                            </Grid>

                                            <Grid item direction='column'>
                                                <Grid item>
                                                    <TextField
                                                        id="Web2"
                                                        label={watchAllFields.Web2 && editMode ? undefined : 'Web'}
                                                        name="Web2"
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

                        {/*Buttons*/}
                        <Grid item container style={{marginTop: 20}} ref={myRef}>
                            {
                                !editMode ?
                                    <Button variant="contained" color="primary" type='submit'
                                        style={{marginRight: 60,}} className={'test'} id={'testid'} itemID={'testItemId'}>
                                        Adauga primarie
                                    </Button>
                                    :
                                    <Grid container justify={'center'}>
                                        <Button variant="contained" color="primary" type='submit'
                                            style={{marginRight: 60,}} className={'Modifica'} >
                                            Modifica
                                        </Button>
                                        <Button variant="contained" color="secondary" onClick={() => {
                                            reset();
                                            setEditMode(false);
                                        }}>
                                            Anuleaza
                                        </Button>
                                    </Grid>
                            }

                        </Grid>

                    </Grid>
                </form>
            </Grid>
        </>
    );
}
