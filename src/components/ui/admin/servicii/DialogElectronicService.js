import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, {useEffect, useState} from 'react';
import ElectronicServices from '../../../../services/electronicService.service';
import {useForm} from 'react-hook-form';


export default function DialogElectronicService({open, setOpen, id, setId}) {

    const [rowUsers, setRowUsers] = useState([]);
    const { register, handleSubmit, setValue } = useForm();


    console.log(id);
    useEffect(() => {
        ElectronicServices.getElectronicServiceById(id).then(
            (response) => {
                console.log(response.data);
                setValue('firstName', 'Bill');
                setValue('lastName', 'Luo');
            });
    }, [id]);

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <Dialog
            style={{zIndex: 1302}}
            open={open}
            onClose={() => {
                setOpen(false);
                setId(0);
            }}
            maxWidth={'lg'}
        >
            <DialogContent style={{height: 600}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" type="text" ref={register} />
                    <input name="lastName" type="text" ref={register} />
                    <button onClick={() => setValue('firstName', 'Bill')}>
                        Set First Name Value
                    </button>
                    <button
                        onClick={() =>
                            setValue('lastName', 'Luo')
                        }
                    >
                        Set Last Name
                    </button>
                    <input type="submit" />
                </form>

            </DialogContent>
        </Dialog>
    );
}
