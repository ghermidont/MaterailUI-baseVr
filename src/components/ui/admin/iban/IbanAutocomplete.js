import React, {useEffect, useState} from 'react';
import {Autocomplete} from '@material-ui/lab';
import {TextField} from '@material-ui/core';
import CityHallService from '../../../../services/cityHall.service';

function IbanAutocomplete({setSelectedCityHall}) {
    const [cityHalls, setCityHalls] = useState([]);


    useEffect(() => {
        CityHallService.getListCityHall().then(
            (response) => {
                setCityHalls(response.data);
            }
        );
    }, []);


    return (
        <Autocomplete
            id="combo-box-demo"
            options={cityHalls}
            getOptionLabel={(option) => option.name}
            style={{width: 300, }}
            onChange={(event, value, reason, details) => setSelectedCityHall(details)}
            renderInput={(params) =>
                <TextField {...params}   label="Selectati primaria" variant="outlined"  />}
        />
    );
}

export default IbanAutocomplete;
