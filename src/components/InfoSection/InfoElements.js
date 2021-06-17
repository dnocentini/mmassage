import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #e2dac3;
    background: ${({lightBg}) => (lightBg ? '#e2dac3' : '#2c2b20')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    };
`;

export const InfoWrapper = styled.div`
    display: grid;
    height: 650px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    };
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #e2dac3;
    text-decoration: underline;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transformation: uppercase;
    margin-bottom: 16px;
    
`;

export const Heading = styled.h1`
margin-top: 50px;
margin-bottom: 24px;
font-size: 50px;
font-family: 'Josefin Sans', sans-serif;
text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
line-height: 1.1;
color: ${({ lightText }) => lightText ? '#fff' : '#2c2b20'};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 20px;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#2c2b20' : '#e2dac3')};
    
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-rigth: 0;
    border: 3px solid #e2dac3;
`;
