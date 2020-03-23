import React, { Component } from 'react';
import { Container, Grid, Typography, Toolbar, Divider, Paper } from '@material-ui/core';
import { FaPencilRuler, FaAnchor, FaMobileAlt } from 'react-icons/fa';
import { GiHorseHead, GiMarsPathfinder } from 'react-icons/gi'
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaWordpress } from 'react-icons/fa';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HttpIcon from '@material-ui/icons/Http';
import SearchIcon from '@material-ui/icons/Search';

// Components
import Card from '../Components/Card';

class Portfolio extends Component {

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
                                color: 'rgb(27,75,121)',
                                letterSpacing: 2,
                            }}>
                                NovaSoft's
                            </Typography>
                            <Typography variant="h6" style={{
                                fontSize: 42,
                                fontWeight: 700,
                                color: 'rgb(5,170,228)',
                                letterSpacing: 2,
                                marginLeft: 10,
                            }}>
                                Portfolio
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
                                        <AiOutlineAntDesign style={{
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
                                            Web Design
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
                                        <HttpIcon style={{
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
                                            Web Development
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
                                        <FaMobileAlt style={{
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
                                            Mobile Development
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
                                        <MdLocalGroceryStore style={{
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
                                            E-Commerce
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
                                        <SearchIcon style={{
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
                                            SEO
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
                                        <FaWordpress style={{
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
                                            Wordpress Themes
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
            </React.Fragment>
        );
    }
}

export default Portfolio;