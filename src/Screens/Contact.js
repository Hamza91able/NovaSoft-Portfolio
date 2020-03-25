import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Toolbar, Divider, Paper, TextField, TextareaAutosize, Button, CircularProgress } from '@material-ui/core';
import swal from 'sweetalert';
import Axios from 'axios';

// Components
import StyledButton from '../Components/StyledButton';

// Static
import ContactPic from '../Static/Images/contact.jpg'
import ContactUsEndPoint from '../Static/ContactUsEndPoint';

const styles = {
    root: {
        background: "black"
    },
    input: {
        color: "white",
        width: '100%'
    },
    textArea: {
        width: '100%',
        maxWidth: '100%',
        minWidth: '100%',
        color: 'white',
        backgroundColor: 'rgb(53, 59, 67)',
        padding: 10
    }
};

function Contact(props) {
    const { classes } = props;

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [disableSubmitButton, setDisableSubmitButton] = React.useState(false);

    const handleSubmit = () => {

        let messageObject = {
            // eslint-disable-next-line
            ['Full Name']: name,
            // eslint-disable-next-line
            ['Email']: email,
            // eslint-disable-next-line
            ['Subject']: subject,
            // eslint-disable-next-line
            ['Message']: message
        }

        if (name !== '' && email !== '' && subject !== '' && message !== '') {
            setDisableSubmitButton(true);

            Axios.post(
                ContactUsEndPoint,
                messageObject,
                { headers: { "Accept": "application/json" } }
            )
                .then(function (response) {
                    setDisableSubmitButton(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    swal("Submitted", "Your message has been email. Please wait, we get back to you shortly.", "success");
                })
                .catch(function (error) {
                    console.log(error);
                    swal("Error", "Error Submitting Form. Please try again later..", "error");
                    setDisableSubmitButton(false);
                });
        } else {
            swal("Error", "Complete all information", "error");
        }
    }

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
                            color: 'rgb(5,170,228)',
                            letterSpacing: 2,
                            marginLeft: 10,
                        }}>
                            Get In Touch
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
                    <img src={ContactPic} alt="contact_pic" style={{
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
                        paddingBottom: 60,
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
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Your Name"
                                    variant="filled"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.input}
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Email Address"
                                    variant="filled"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.input}
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="standard-basic"
                                    label="Your Subject"
                                    variant="filled"
                                    InputProps={{
                                        className: classes.input
                                    }}
                                    className={classes.input}
                                    onChange={e => setSubject(e.target.value)}
                                    value={subject}
                                />
                                <br />
                                <br />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    id="standard-basic"
                                    label="Write Message"
                                    variant="filled"
                                    className={classes.textArea}
                                    rowsMin={8}
                                    placeholder="Write Message"
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                />
                                <br />
                                <br />
                            </Grid>
                            {disableSubmitButton
                                ?
                                <Button style={{ color: 'white', }} variant='contained' color='secondary'>
                                    <CircularProgress style={{ color: 'white', marginRight: 10 }} /> Sending...
                                </Button>
                                :
                                <StyledButton handleSubmit={handleSubmit}>
                                    Send Message
                                </StyledButton>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default withStyles(styles)(Contact);
