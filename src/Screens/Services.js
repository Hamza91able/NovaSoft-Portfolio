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
                                            Looking for a perfect Web design for your website.
                                            It looks like you're on the right page.
                                            Novasoft provides purely unique designs for your website which perfectly describe your website.
                                            Whereas self-adaptable to all media screens that ever exist.<br /><br />
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
                                            We convert your business idea into a fully-functional Web app.
                                            Novasoft handles every website just like their own with thousands of ideas we can turn your website into an attractive one.
                                            From the front to the back we have diversity of implementation methods.<br /><br />
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
                                            Novasoft provide Hybrid application development services to our customers.
                                            As everything is getting smarter so does our ways.
                                            Let’s build a modern mobile application with a cross-browser functionality with highly maintained UI/UX which will attracts every user to your application.<br /><br />
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
                                            Novasoft provides a variety of ideas to have a digital store in a modern world with modern ways.
                                            Make your products enlighten with our services. We build a greater,
                                            better and extremely well-organized e-commerce store.
                                            Let’s your product jump into the marker with our service.<br /><br />
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
                                            Worried about your website ranking? Well not anymore.
                                            Novasoft has SEO professionals that provide the most advanced and effective SEO services for your website.
                                            Our expert’s strategy and the implementation makes any website road to the top in just less time.<br /><br />
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
                                            Our WordPress developers provide every possible solution for your WordPress website.
                                            We provide exclusive themes, customization and plugin integration which makes your website even more attractive and functional.
                                            Whether you need customization, migration on WordPress we provide services for all.
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