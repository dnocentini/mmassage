import React from 'react';
import Image from '../../images/SPA.png';
import Image2 from '../../images/BG.png';
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroMBg
} from './HeroElements';

const HeroSection = () => {


    return (
        <>
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
            <HeroMBg>
                <ImageBg src={Image2} />
            </HeroMBg>
        </>
    );
};

export default HeroSection;