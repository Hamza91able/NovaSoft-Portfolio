import React, { Component } from 'react';
import { Container, Grid, Typography, Toolbar, Divider, Paper } from '@material-ui/core';
import { GiDart } from 'react-icons/gi'
import { FaWordpress, FaReact, FaNode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// Static
import SkillsPic from '../Static/Images/skills.jpg'

class Skills extends Component {

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
                                Our Expertise
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
                        <img src={SkillsPic} alt="skills_pic" style={{
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
                                We have expertise on various advanced platforms,
                                check which suits you best.
                            </Typography>
                            <br />
                            <br />
                            <br />
                            <Grid container>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaReact style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="React JS" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaReact style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="React Native" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <GiDart style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="Flutter" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaNode style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="Node JS" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <DiMongodb style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="Mongo DB" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaWordpress style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="WordPress" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaHtml5 style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="HTML" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <FaCss3Alt style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="CSS" />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid item xs={6} md={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemAvatar>
                                                <IoLogoJavascript style={{
                                                    height: 42,
                                                    width: 42,
                                                    color: 'rgb(5, 170, 228)',
                                                    marginTop: 5
                                                }} />
                                            </ListItemAvatar>
                                            <ListItemText primary="JavaScript" />
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

export default Skills;