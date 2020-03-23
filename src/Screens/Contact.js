import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Toolbar, Divider, Paper, TextField, TextareaAutosize } from '@material-ui/core';

// Components
import StyledButton from '../Components/StyledButton';

// Static
import ContactPic from '../Static/Images/contact.jpg'

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white"
    }
};

function Contact(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Container maxWidth='lg'>
                <div style={{
                    justifyContent: 'center',
                    alignItems: 'center,',
                    display: 'inline-flex',
                    width: '100%',
                }}>
                    <Toolbar>
                        <Typography variant="h6" style={{
                            fontSize: 42,
                            fontWeight: 700,
                            color: 'rgb(27,75,121)',
                            letterSpacing: 2,
                        }}>
                            Get In
                            </Typography>
                        <Typography variant="h6" style={{
                            fontSize: 42,
                            fontWeight: 700,
                            color: 'rgb(5,170,228)',
                            letterSpacing: 2,
                            marginLeft: 10,
                        }}>
                            Touch
                        </Typography>
                    </Toolbar>
                </div>
                <br />
                <Container maxWidth='sm'>
                    <Divider style={{ height: 3, backgroundColor: '#353b43' }} />
                </Container>
                <br />
                <br />
                <br />
            </Container>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <img src={ContactPic} style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        height: '100%',
                        width: '100%'
                    }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{
                        width: '100%',
                        height: '100%',
                        boxShadow: 'none',
                        paddingTop: 60,
                        paddingLeft: 40,
                        paddingRight: 80,
                        backgroundColor: 'transparent',
                        fontFamily: 'Quattrocento Sans,sans-serif',
                        backgroundColor: '#353b43',
                        color: '#afbac4',
                        borderRadius: 0,
                    }}>
                        <Typography variant='h4'>
                            You Seem Nice... Let's Talk...!!!
                        </Typography>
                        <br />
                        <br />
                        <br />
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Your Name"
                                    variant="filled"
                                    style={{
                                        width: '80%',
                                        color: 'white'
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Email Address"
                                    variant="filled"
                                    style={{
                                        width: '80%',
                                        color: 'white'
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Your Subject"
                                    variant="filled"
                                    style={{
                                        width: '80%',
                                        color: 'white'
                                    }}
                                    InputProps={{
                                        className: classes.input
                                    }}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    id="standard-basic"
                                    label="Write Message"
                                    variant="filled"
                                    style={{
                                        width: '80%',
                                        maxWidth: '80%',
                                        color: 'white',
                                        backgroundColor: 'rgb(53, 59, 67)',
                                        padding: 10
                                    }}
                                    rowsMin={8}
                                    placeholder="Write Message"
                                />
                                <br />
                                <br />
                            </Grid>
                            <StyledButton>
                                Send Message
                            </StyledButton>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withStyles(styles)(Contact);
