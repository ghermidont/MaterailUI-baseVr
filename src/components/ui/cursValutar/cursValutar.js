import React, {useEffect, useState} from 'react';
import Exchange from '../../../services/externalServiceOfApi.service';
import {ListItem, ListItemText} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function CursValutar(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        Exchange.getExchange().then(
            (response) => {
                setList(response.data);
            }
        );

    }, []);

    const element = list.map((value) => {
        return (
            <ListItem key={value.currency + 'xxx'}>
                <ListItemText id={value.name} primary={value.name} style={{marginRight: 10, minWidth: 150}}/>
                <Divider orientation="vertical" flexItem/>
                <ListItemText id={value.currency} primary={value.currency}
                    style={{marginLeft: 10, marginRight: 10, minWidth: 40, textAlign: 'center'}}/>
                <Divider orientation="vertical" flexItem/>
                <ListItemText id={value.value} primary={value.value}
                    style={{marginLeft: 10, textAlign: 'center'}}/>
            </ListItem>
        );
    });

    return (
        <>
            <Typography  variant="h4" align="center" style={{marginTop: 30}}>
                Curs valutar al zilei curente
            </Typography>
            <Grid container justify={'center'}>
                <List>
                    {element}
                </List>
            </Grid>
        </>
    );
}

export default CursValutar;
