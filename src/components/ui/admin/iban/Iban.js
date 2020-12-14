import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import ElectronicServices from '../servicii/ElectronicServices';
import AddIban from './AddIban';
import IbanAutocomplete from './IbanAutocomplete';
import Typography from '@material-ui/core/Typography';

export default function Iban() {
    const [value, setValue] = useState(0);
    const [selectedCityHall, setSelectedCityHall] = useState(null);
    let tmp = null;
    console.log(selectedCityHall);
    switch (value) {
    case 0:
        tmp = <AddIban/>;
        break;
    case 1:
        tmp = <ElectronicServices/>;
        break;
    }


    return (
        <Grid container>
            <Grid item container justify={'center'}>
                <Grid item container justify={'center'}>
                    <Typography component="h1" variant="h4" align="center">
                        Creati, editati, vizualizati iban-urile pentru primaria selectata.
                    </Typography>
                </Grid>
                <IbanAutocomplete setSelectedCityHall={setSelectedCityHall}/>
                {tmp}
            </Grid>
        </Grid>
    );
}
