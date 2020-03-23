import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        color: 'white',
        width: 180,
        height: 52,
        borderColor: 'white',
        borderRadius: 0,
        fontWeight: 700,
        '&:hover': {
            backgroundColor: 'rgb(5,170,228)',
            transition: '0.4s',
        },
        [theme.breakpoints.down("sm")]: {
            width: 180,
            height: 42,
        },
    }
}));

export default function StyledButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button className={classes.button} variant='outlined'>
                Explore Us
            </Button>
        </div>
    );
}