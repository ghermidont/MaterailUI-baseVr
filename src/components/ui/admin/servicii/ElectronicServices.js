import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {DataGrid} from '@material-ui/data-grid';
import ElectronicService from '../../../../services/electronicService.service';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddElectronicService from './AddElectronicService';
import DialogElectronicService from './DialogElectronicService';
import * as yup from 'yup';


const gridSortModel = [
    {
        field: 'id',
        sort: 'desc'// as SortDirection,
    },
];

const schema = yup.object().shape({
    Denumire: yup.string().min(5).max(450).required(),
    Etichet: yup.string().min(5).max(200).required(),
    ContTrez: yup.string().min(3).min(5).max(15).required(),
    Suma: yup.number().positive().lessThan(1000).required(),
});

export default function ElectronicServices(props) {
    const [rows, setRows] = useState([]);
    const [triggerRow, setTriggerRow] = useState(0);
    const [open, setOpen] = useState(false);
    const [id, setId] = useState();


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
        {field: 'amount', headerName: 'Amount', width: 130},
        {field: 'treasureAccount', headerName: 'treasureAccount', width: 130},
        {
            field: 'isSelected', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (z) => {
                const onClick = () => { setOpen(true); setId(z.row.id);};
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


    return (
        <>
            <Grid container direction='column'>
                <Grid container justify='center'>
                    <Typography variant="h4" noWrap>
                        Editarea Serviciilor
                    </Typography>
                </Grid>
                <Grid container spacing={3} justify='center'>
                    <div style={{height: 300, width: 700}}>
                        <DataGrid rows={rows} columns={columns} pageSize={3} sortModel={gridSortModel}/>
                    </div>
                </Grid>
                <Grid container justify={'center'}>
                    <AddElectronicService setTriggerRow={setTriggerRow} schema={schema}/>
                </Grid>
            </Grid>
            <DialogElectronicService open={open} setOpen={setOpen} id={id} setId={setId} schema={schema} setTriggerRow={setTriggerRow} />
        </>
    );
}

