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
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: -6,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
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
        backgroundColor: 'rgb(53, 59, 67)',
        boxShadow: 'none'
    },
    desktopButtons: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex'
        },
    },
    mobileMenu: {
        display: 'none',
        [theme.breakpoints.down("md")]: {
            display: 'flex'
        },
    },
    popper: {
        backgroundColor: 'rgb(53, 59, 67)',
        width: '100vw',
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar className={classes.appbar} position={props.headerType}>
                    <Container maxWidth="lg">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Nova
                            </Typography>
                            <Typography variant="h6" className={classes.secondTitle}>
                                Soft
                            </Typography>
                            <div className={classes.desktopButtons}>
                                <Button onClick={props.executeScrollToHome} className={classes.menuButton} color="inherit">Home</Button>
                                <Button onClick={props.executeScrollToAbout} className={classes.menuButton} color="inherit">About Us</Button>
                                <Button onClick={props.executeScrollToServices} className={classes.menuButton} color="inherit">Services</Button>
                                <Button onClick={props.executeScrollToSkills} className={classes.menuButton} color="inherit">Skills</Button>
                                <Button onClick={props.executeScrollToPortfolio} className={classes.menuButton} color="inherit">Portfolio</Button>
                                <Button onClick={props.executeScrollToContact} className={classes.menuButton} color="inherit">Contact</Button>
                            </div>
                            <div className={classes.mobileMenu}>
                                <IconButton className={classes.menuButton} aria-describedby={id} onClick={handleClick}>
                                    <MenuIcon />
                                </IconButton>
                                <Popper className={classes.popper} id={id} open={open} anchorEl={anchorEl}>
                                    <Container maxWidth='sm'>
                                        <List onClick={() => setAnchorEl(null)} component="nav" aria-label="main mailbox folders">
                                            <ListItem onClick={props.executeScrollToHome} className={classes.menuButton} button>
                                                <ListItemText primary="Home" />
                                            </ListItem>
                                            <ListItem onClick={props.executeScrollToAbout} className={classes.menuButton} button>
                                                <ListItemText primary="About Us" />
                                            </ListItem>
                                            <ListItem onClick={props.executeScrollToServices} className={classes.menuButton} button>
                                                <ListItemText primary="Services" />
                                            </ListItem>
                                            <ListItem onClick={props.executeScrollToSkills} className={classes.menuButton} button>
                                                <ListItemText primary="Skills" />
                                            </ListItem>
                                            <ListItem onClick={props.executeScrollToPortfolio} className={classes.menuButton} button>
                                                <ListItemText primary="Portfolio" />
                                            </ListItem>
                                            <ListItem onClick={props.executeScrollToContact} className={classes.menuButton} button>
                                                <ListItemText primary="Contact" />
                                            </ListItem>
                                        </List>
                                    </Container>
                                </Popper>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        </React.Fragment>
    );
}