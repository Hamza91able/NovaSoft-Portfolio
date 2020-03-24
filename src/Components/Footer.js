import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

// Components
import SocialMediaButton from '../Components/SocialMediaButton';

class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <Paper style={{
                    backgroundColor: '#353b43',
                    width: '100%',
                    boxShadow: 'none',
                    borderRadius: 0,
                    paddingTop: 60,
                    color: 'white'
                }}>
                    <div style={{
                        justifyContent: 'center',
                        alignItems: 'center,',
                        display: 'inline-flex',
                        width: '100%',
                        marginTop: 10
                    }}>
                        <div onClick={() => {
                            window.open(
                                'https://www.facebook.com/NovaSoft110',
                                '_blank'
                            );
                        }} style={{ marginRight: 20 }}>
                            <SocialMediaButton>
                                <FaFacebookF style={{
                                    height: 32,
                                    width: 32,
                                }} />
                            </SocialMediaButton>
                        </div>
                        <div style={{ marginRight: 20 }}>
                            <SocialMediaButton>
                                <FaTwitter style={{
                                    height: 32,
                                    width: 32,
                                }} />
                            </SocialMediaButton>
                        </div>
                        <div onClick={() => {
                            window.open(
                                'https://www.youtube.com/channel/UC4OI556vWFkEp20ImcLkeSg',
                                '_blank'
                            );
                        }} style={{ marginRight: 20 }}>
                            <SocialMediaButton>
                                <FaYoutube style={{
                                    height: 32,
                                    width: 32,
                                }} />
                            </SocialMediaButton>
                        </div>
                        <div style={{ marginRight: 20 }}>
                            <SocialMediaButton>
                                <FaLinkedinIn style={{
                                    height: 32,
                                    width: 32,
                                }} />
                            </SocialMediaButton>
                        </div>
                    </div>
                </Paper>
                <div style={{ height: 30, backgroundColor: '#353b43' }} />
                <Paper style={{
                    backgroundColor: '#353b43',
                    width: '100%',
                    boxShadow: 'none',
                    borderRadius: 0,
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <div style={{
                        justifyContent: 'center',
                        alignItems: 'center,',
                        display: 'inline-flex',
                        width: '100%',
                        marginTop: 10
                    }}>
                        Deisgn and Developed by Muhammad Hamza Khan
                        <br />
                        Copyright © 2020. All Rights Reserved.
                        <br />
                        <br />
                    </div>
                </Paper>
            </React.Fragment>
        );
    }
}

export default Footer;