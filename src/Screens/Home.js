import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// Components
import StyledButton from '../Components/StyledButton';

// Static
import homeImage from '../Static/Images/home.jpg'

const useStyles = theme => ({
    mainHeading: {
        fontSize: '90px',
        fontWeight: 700,
        marginBottom: 10,
        [theme.breakpoints.only("md")]: {
            fontSize: 50,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 18,
        },
    },
    secondaryHeadingContainer: {
        justifyContent: 'center',
        alignItems: 'center,',
        display: 'inline-flex',
        width: '100%',
    },
    secondayHeadingText: {
        fontSize: '34px',
        width: '70%',
        fontWeight: 600,
        [theme.breakpoints.only("md")]: {
            fontSize: 25,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 14,
            width: '95%'
        },
    },
    image: {
        height: '100%',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            height: '200%',
        }
    }
});

class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div style={{
                    position: 'relative',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
                }}>
                    <img src={homeImage} className={classes.image} />
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%'
                    }}>
                        <Typography variant='h1' className={classes.mainHeading}>
                            WELCOME TO NOVASOFT SOLUTIONS
                            </Typography>
                        <div className={classes.secondaryHeadingContainer}>
                            <p className={classes.secondayHeadingText}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                        </div>
                        <StyledButton executeScrollToServices={this.props.executeScrollToServices}>
                            Explore Us
                        </StyledButton>
                    </div>
                </div>
            </div>
        );
    }
};

export default withStyles(useStyles)(Home);
