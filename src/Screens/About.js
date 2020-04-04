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
                                            Exceed client's expectations by going beyond software to provide best solutions that transform data into knowledge,
                                            enabling them to solve their problems.
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
                                            To earn Global admiration and promote Pakistan as well as,
                                            as an IT Outsourcer by delivering eminent Software Services and Products which can compete with Globle Products.
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
                                            Our vision is to unleash the full potential of the amazing pool of the software engineers
                                            in Pakistan by providing world class outsourcing services.
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
                                We strive to integrate tech-centred solutions into everyday life and make this planet a better place to live at!
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Typography variant='p'>
                                Our team of professionals has years’ long experience and expertise to bring life to your brand and product line.
                                Our services are highly customized around users’ preferences and experiences.
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Typography variant='p'>
                                Our services portfolio expand from clouding your data to representing it in the best words,
                                with the right imagery, to the perfect mix of audience. We aim to reshape businesses into brands.
                            </Typography>
                            <br />
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
                                                        We maximize your ROI by driving potential traffic to your business.
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
                                                        We can personalize your website and take it to the next level with the Design.
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