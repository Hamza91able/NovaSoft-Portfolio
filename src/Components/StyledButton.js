import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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

export default function StyledButton(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button onClick={props.executeScrollToServices ? props.executeScrollToServices : props.handleSubmit} className={classes.button} variant='outlined'>
                {props.children}
            </Button>
        </div>
    );
}