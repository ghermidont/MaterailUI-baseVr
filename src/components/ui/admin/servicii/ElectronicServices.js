import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as _ from '@material-ui/data-grid';
import {DataGrid} from '@material-ui/data-grid';
import ElectronicService from '../../../../services/electronicService.service';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function ElectronicServices(props) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        ElectronicService.getListElectronicService().then(
            (response) => {
                console.log(response.data);
                setServices(prevData => {
                    if (_.isEqual(prevData, response.data)) {
                        return (prevData);
                    } else {
                        return (setServices(response.data));
                    }
                });
            }
        );
    }, [services]);

    const columns = [
        // {field: 'id', headerName: 'Id', width: 90},
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
                        <EditIcon />
                    </IconButton>
                );

            }
        },
        {
            field: 'isSelected2', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (x) => {
                const onClick = () => {
                };
                return (
                    <IconButton aria-label="delete">
                        <DeleteIcon />
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
                    <DataGrid rows={services} columns={columns} pageSize={3}/>
                </div>
            </Grid>
            <Grid container spacing={3} justify='center'>
                <div style={{height: 300, width: 700}}>
                    <DataGrid rows={services} columns={columns} pageSize={3}/>
                </div>
            </Grid>
        </Grid>
    );
}
