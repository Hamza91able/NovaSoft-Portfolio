import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
        '&:hover': {
            color: 'rgb(5,170,228)',
            transition: '0.4s'
        }
    },
    title: {
        fontSize: 42,
        fontWeight: 700,
        color: 'rgb(27,75,121)',
        letterSpacing: 2
    },
    secondTitle: {
        flexGrow: 1,
        fontSize: 42,
        fontWeight: 700,
        color: 'rgb(5,170,228)',
        letterSpacing: 2
    },
    appbar: {
        backgroundColor: '#ffff',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="static">
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Nova
                            </Typography>
                            <Typography variant="h6" className={classes.secondTitle}>
                                Soft
                            </Typography>
                            <Button className={classes.menuButton} color="inherit">Home</Button>
                            <Button className={classes.menuButton} color="inherit">About Us</Button>
                            <Button className={classes.menuButton} color="inherit">Services</Button>
                            <Button className={classes.menuButton} color="inherit">Portfolio</Button>
                            <Button className={classes.menuButton} color="inherit">Contact</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        </React.Fragment>
    );
}