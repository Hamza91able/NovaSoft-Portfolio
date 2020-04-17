import React, { Component } from 'react';
import { Container, Grid, Typography, Toolbar, Divider, Paper } from '@material-ui/core';
import { FaPencilRuler, FaAnchor } from 'react-icons/fa';
import { GiHorseHead, GiMarsPathfinder } from 'react-icons/gi'
import { FiEdit3 } from 'react-icons/fi';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// Components
import Card from '../Components/Card';

// Static
import AboutPic from '../Static/Images/about.jpg'

class About extends Component {

    render() {
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
                                About Us
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
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Grid>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                    }}>
                                        <FaPencilRuler style={{
                                            height: 52,
                                            width: 52
                                        }} />
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography variant='h5'>
                                            Our Mission
                                    </Typography>
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography>
                                            Our mission is to push the limits for IT by providing unique and advance working solutions
                                            to every business struggling to the top.
                                            <br />
                                            <br />
                                        </Typography>
                                    </div>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Grid>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                    }}>
                                        <GiHorseHead style={{
                                            height: 52,
                                            width: 52
                                        }} />
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography variant='h5'>
                                            Our Plan
                                    </Typography>
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography>
                                            Our plan is to be recognized globally as one of the best Pakistan’s IT services provider.
                                            Pushing our products and services to reach on the international level will be one of our priority.
                                    </Typography>
                                    </div>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card>
                                <Grid>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                    }}>
                                        <FaAnchor style={{
                                            height: 52,
                                            width: 52
                                        }} />
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography variant='h5'>
                                            Our Vision
                                    </Typography>
                                    </div>
                                    <div style={{
                                        justifyContent: 'center',
                                        alignItems: 'center,',
                                        display: 'inline-flex',
                                        width: '100%',
                                        marginTop: 10
                                    }}>
                                        <Typography>
                                            Our vision is to develop a perfect environment which will be used to develop
                                            extraordinary products or solutions which can be used use by the people around the world.
                                        </Typography>
                                    </div>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <img src={AboutPic} alt='about_pic' style={{
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
                            fontFamily: 'Quattrocento Sans,sans-serif',
                            backgroundColor: '#353b43',
                            color: '#afbac4',
                            borderRadius: 0,
                        }}>
                            <Typography variant='h4'>
                                You Desire we Develop
                            </Typography>
                            <br />
                            <Typography variant='p'>
                                We focused a lot to put a perfect idea on the table to provide stable and a perfect plan for your business,
                                which can run smoothly in today’s world.
                            </Typography>
                            <br />
                            <br />
                            {/*  */}
                            {/* <br /> */}
                            <Typography variant='p'>
                                Apart from professional experience our developers have the potential to transform any idea into code.
                                Our services are unique because we provide every possible outcome for our clients and the promise to make it possible.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='p'>
                                We convert the business into a brand, our services are much flexible which fulfills promising results.
                                We are always available on your back with our full support.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='p'>
                                Let’s change the face of your business, we can take your business to the new heights.
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <GiMarsPathfinder style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)'
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="SEO Optimized"
                                                secondary={
                                                    <Typography variant='inherit'>
                                                        We maximize the organic traffic on your website by using premium approaches.
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FiEdit3 style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)'
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="Easy Customization"
                                                secondary={
                                                    <Typography variant='inherit'>
                                                        We can customize your complete website with modern design to make it more beautiful.
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default About;