import React, {useEffect, useState} from 'react';
import IbanService from '../../../../services/iban.service';
import List from '@material-ui/core/List';
import {ListItem, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Divider from '@material-ui/core/Divider';


function ViewIban({selectedCityHall}) {
    const [list, setList] = useState([]);

    useEffect(() => {
        IbanService.getListIban(selectedCityHall.option.id).then(
            (response) => {
                setList(response.data);
            }
        );
    }, [selectedCityHall]);

    const deleteFunction = (id) => {
        IbanService.deleteIbanById(id);
    };

    const element = list.map((value) => {
        return (
            <ListItem key={value.id}>
                <ListItemText id={value.id} primary={value.name} style={{marginRight: 10}}/>
                <Divider orientation="vertical" flexItem/>
                <ListItemText id={value.id * 2} primary={value.electronicService}
                    style={{marginLeft: 10, marginRight: 10}}/>
                <Divider orientation="vertical" flexItem/>
                <ListItemSecondaryAction onClick={() => deleteFunction(value.id)}>
                    <IconButton edge="end" >
                        <DeleteForeverIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    });


    return (
        <List>
            {element}
        </List>
    );
}

export default ViewIban;
