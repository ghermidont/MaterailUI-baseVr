import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import ElectronicServices from '../servicii/ElectronicServices';
import AddIban from './AddIban';
import IbanAutocomplete from './IbanAutocomplete';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ViewIban from './ViewIban';

export default function Iban() {
    const [value, setValue] = useState(0);
    const [selectedCityHall, setSelectedCityHall] = useState(null);
    let tmp = null;
    switch (value) {
    case 0:
        tmp = <ViewIban selectedCityHall={selectedCityHall} />;
        break;
    case 1:
        tmp = <AddIban/>;
        break;
    }


    return (
        <Grid container  style={{minHeight: 400}} direction={'column'} >
            <Typography component="h1" variant="h4" align="center">
                Creati, editati, vizualizati iban-urile pentru primaria selectata.
            </Typography>
            <Grid item container justify={'center'}>
                <IbanAutocomplete setSelectedCityHall={setSelectedCityHall}/>
                <IconButton aria-label="edit">
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Grid item container justify={'center'}>
                {selectedCityHall && tmp}
            </Grid>

        </Grid>
    );
}
