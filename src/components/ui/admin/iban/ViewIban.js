import React, {useEffect} from 'react';
import IbanService from '../../../../services/iban.service';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


function ViewIban({selectedCityHall}) {

    useEffect(() => {
        IbanService.getListIban(selectedCityHall.option.id).then(
            (response) => {

            }
        );
    }, [selectedCityHall]);

    return (
        <List className={classes.root}>

        </List>
    );
}

export default ViewIban;
