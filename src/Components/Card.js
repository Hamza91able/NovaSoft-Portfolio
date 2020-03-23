import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

export default function OutlinedCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {props.children}
            </CardContent>
        </Card>
    );
}