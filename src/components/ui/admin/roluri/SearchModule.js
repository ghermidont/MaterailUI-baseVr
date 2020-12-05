import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },

}));

export default function CustomizedInputBase({handleSearch, setEmail, email}) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} >
            <InputBase
                className={classes.input}
                placeholder="Cauta utilizator dupa email"
                inputProps={{ 'aria-label': 'Cauta utilizator dupa email' }}
                value={email}
                onChange={e =>setEmail((e.target.value).trim())}
            />
            <IconButton className={classes.iconButton} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
