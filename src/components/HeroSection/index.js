import React from 'react';
import Image from '../../images/SPA.png';
import Image2 from '../../images/BG1.jpeg';
import {
    HeroContainer,
    HeroBg,
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroB,
    ImageB
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
            <HeroB>
                <ImageB src={Image2} />
            </HeroB>
        </>
    );
};

export default HeroSection;