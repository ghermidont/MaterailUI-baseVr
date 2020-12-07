import React, {useEffect, useState} from 'react';
import ServiceRole from '../../../../services/electronicService.service';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import OutlinedCard from './Card';

export default function Roles(props) {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        ServiceRole.getListRoles().then(
            (response) => {
                setRoles(response.data);
            }
        );
    }, []);

    const element = roles.map((item) => {
        return(
            <Grid item key={item}>
                <OutlinedCard role={item} />
            </Grid>
        );
    });

    return (
        <Grid container direction='column'>
            <Grid container justify='center'>
                <Typography variant="h4"  noWrap>
                    Roluri disponibile
                </Typography>
            </Grid>
            <Grid container spacing={3} justify='center'>
                {element}
            </Grid>
        </Grid>
    );
}
