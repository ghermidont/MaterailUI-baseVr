import React, {useEffect} from 'react';
import IbanService from '../../../../services/iban.service';

function ViewIban({selectedCityHall}) {
    console.log(selectedCityHall);
    useEffect(() => {
        IbanService.getListIban(selectedCityHall.option.id).then(
            (response) => {

            }
        );
    }, [selectedCityHall]);

    return (
        <div>
            <p>

            </p>
        </div>
    );
}

export default ViewIban;
