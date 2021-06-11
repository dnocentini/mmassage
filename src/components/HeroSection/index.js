import React from 'react';
import Image from '../../images/SPA.jpeg';

import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements';

const HeroSection = () => {


    return (
        <HeroContainer id="home">   
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroH1>M Massage</HeroH1>
                <HeroP>
                    Monday - Friday: 10am - 7pm
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;