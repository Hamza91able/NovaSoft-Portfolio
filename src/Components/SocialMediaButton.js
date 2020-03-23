import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        color: 'white',
        width: 70,
        height: 70,
        borderColor: 'white',
        borderRadius: 0,
        fontWeight: 700,
        '&:hover': {
            backgroundColor: 'rgb(5,170,228)',
            transition: '0.4s',
        },
    }
}));

export default function StyledButton(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} variant='outlined'>
                {props.children}
            </Button>
        </div>
    );
}