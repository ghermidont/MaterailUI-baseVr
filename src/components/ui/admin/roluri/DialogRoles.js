import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import React, {useEffect, useState} from 'react';
import * as _ from '@material-ui/data-grid';
import {DataGrid} from '@material-ui/data-grid';
import ServiceRole from '../../../../services/electronicService.service';
import SearchModule from './SearchModule';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DialogRoles({open, setOpen, role, edit, setEdit}) {

    const [rowUsers, setRowUsers] = useState([]);


    useEffect(() => {
        ServiceRole.getUsersByRole(role).then(
            (response) => {
                console.log(rowUsers + response.data);
                setRowUsers(prevData => {
                    if (_.isEqual(prevData, response.data)) {
                        return (prevData);
                    } else {
                        return (setRowUsers(response.data));
                    }
                });
            }
        );
    }, [rowUsers, role]);


    const columns = [
        {field: 'id', headerName: 'Id', width: 90},
        {field: 'userName', headerName: 'userName', width: 130},
        {field: 'isSelected', headerName: 'isSelected', width: 130,}
    ];


    return (
        <Dialog
            style={{zIndex: 1302}}
            open={open}
            onClose={() => {
                setOpen(false), setEdit(false);
            }}
            maxWidth
        >
            <DialogContent style={{height: 600}}>
                <div style={{height: 300, width: 700}}>
                    <DataGrid rows={rowUsers} columns={columns} pageSize={3}/>
                </div>
                {edit && <SearchUser setRowUsers={setRowUsers} role={role}/>}
            </DialogContent>
        </Dialog>
    );
}

function SearchUser({role, setRowUsers}) {
    const [email, setEmail] = useState('');
    const [rowSearchedUser, setRowSearchedUser] = useState([]);
    const handleSearch = () => {
        ServiceRole.getUserByEmail(email, role).then(
            (response) => {
                setRowSearchedUser([response.data]);
            }
        );
    };
    const columns = [
        {field: 'id', headerName: 'Id', width: 90},
        {field: 'userName', headerName: 'userName', width: 130},
        {
            field: 'isSelected', headerName: '      ', width: 150,
            // eslint-disable-next-line react/display-name
            renderCell: (x) => {
                const onClick = () => {
                    ServiceRole.postToggleUserCityHallAdminRole(email, x.value).then();
                    setRowUsers([]);
                    setRowSearchedUser([]);
                    setEmail('');
                };
                return (
                    !x.value ?
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={onClick}
                        >
                            Adauga rol
                        </Button> :
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon/>}
                            size="small"
                            style={{width: 120}}
                            onClick={onClick}>
                            Sterge rol
                        </Button>

                );
            }
        }
    ];
    return (
        <>
            <SearchModule handleSearch={handleSearch} setEmail={setEmail} email={email}/>
            <div style={{height: 300, width: '100%'}}>
                <DataGrid rows={rowSearchedUser} columns={columns} pageSize={3}/>
            </div>
        </>
    );
}
