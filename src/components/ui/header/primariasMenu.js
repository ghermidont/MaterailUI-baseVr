//* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; //Use 'npm install @material-ui/lab' command to import this package.
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
    menu: {
        paddingTop: 5,
        paddingLeft: 5
    }
});

export default function CountrySelect() {
    const classes = useStyles();

    return (
        <div className={classes.menu}>
            <Autocomplete
                id="country-select-demo"
                style={{ width: 300 }}
                options={countries}
                classes={{
                    option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                    <React.Fragment>
                        {option.label}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Selectați Primăria"
                        variant="filled"
                        inputProps={{
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                    />
                )}
            />
        </div>
    );
}

const countries = [
    {label: 'Municipiul Chișinău'},
    {label: 'Municipiul Bălți'},
    {label: 'Municipiul Comrat'},
    {label: 'Municipiul Anenii Noi'},
    {label: 'Municipiul Briceni'},
    {label: 'Municipiul Dondușeni'},
    {label: 'Municipiul Telenești'}
];