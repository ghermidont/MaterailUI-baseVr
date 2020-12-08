import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, {useEffect, useState} from 'react';
import * as _ from '@material-ui/data-grid';
import ServiceRole from '../../../../services/role.service';


export default function DialogElectronicService({open, setOpen, id}) {

    const [rowUsers, setRowUsers] = useState([]);


    // useEffect(() => {
    //     ServiceRole.getUsersByRole(role).then(
    //         (response) => {
    //             console.log(rowUsers + response.data);
    //             setRowUsers(prevData => {
    //                 if (_.isEqual(prevData, response.data)) {
    //                     return (prevData);
    //                 } else {
    //                     return (setRowUsers(response.data));
    //                 }
    //             });
    //         }
    //     );
    // }, [rowUsers, role]);




    return (
        <Dialog
            style={{zIndex: 1302}}
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            maxWidth={'lg'}
        >
            <DialogContent style={{height: 600}}>


            </DialogContent>
        </Dialog>
    );
}
