import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    
    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: 
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                rgba(0,0,0,0.6) 100%
            ),
            linear-gradient(
                180deg, 
                rgba(0,0,0,0.2) 0%,
                transparent 100%
            );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 108px;
    text-align: center;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 42px;
    }
`;

export const HeroP = styled.p`
    margin-top: 84px;
    color: #e2dac3;
    font-size: 30px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center;
    max-width: 600px;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroMBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


