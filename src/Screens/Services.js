import React, { Component } from 'react';
import { Container, Grid, Typography, Toolbar, Divider } from '@material-ui/core';
import { FaMobileAlt } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdLocalGroceryStore } from 'react-icons/md';
import { FaWordpress } from 'react-icons/fa';
import HttpIcon from '@material-ui/icons/Http';
import SearchIcon from '@material-ui/icons/Search';

// Components
import Card from '../Components/Card';

class Services extends Component {

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
                                Our Services
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
                                            Looking to make a mark on the world wide web?
                                            Whether you need a new design for a custom built website or
                                            a design for a popular CMS platform you’ll find the perfect web design with our design services.<br /><br />
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
                                            We showcase your business idea into a professional website.
                                            We at NovaSoft are best in creating responsive websites and web templates.<br />
                                            Our team at NovaSoft got them covered, they are fully updated with the third pary APIs.<br /><br />
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
                                            Get a competitive edge in market with highly optimized and featured-rich Application Development Services.
                                            We can develop customized applications according to customers requirement.
                                            Whether it is an E-commerce app, Integration of a Web portal or a Social App.
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
                                            NovaSoft offers the best SEO services that get your targeted traffic.
                                            The money you spend goes towards managing your SEO campaigns.
                                            Our SEO experts have been working for years and have a professional skillset with a ton of data to know which strategy suits your business.
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
                                            Our team of dedicated WordPress developers incorporate scalable features that your business require.
                                            We provide one stop shop solution to our clients covering WordPress theme design,
                                            WordPress theme development, WordPress migration and Hosting.
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

export default Services;