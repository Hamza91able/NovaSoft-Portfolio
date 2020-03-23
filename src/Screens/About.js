import React, { Component } from 'react';
import { Container, Grid, Typography, Toolbar, Divider } from '@material-ui/core';
import { FaPencilRuler, FaAnchor } from 'react-icons/fa';
import { GiHorseHead } from 'react-icons/gi'
// Components
import Card from '../Components/Card';

class About extends Component {

    render() {
        return (
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
                            About
                        </Typography>
                        <Typography variant="h6" style={{
                            fontSize: 42,
                            fontWeight: 700,
                            color: 'rgb(5,170,228)',
                            letterSpacing: 2,
                            marginLeft: 10,
                        }}>
                            Us
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </Typography>
                                </div>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default About;