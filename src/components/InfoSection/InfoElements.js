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
    height: 760px;
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
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
margin: 20px;
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
    margin: 20px;
    font-size: 20px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#2c2b20' : '#e2dac3')};
    
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    margin: 20px;
`;

export const Img = styled.img`
    float: left;
    width:  450px;
    height: 300px;
    background-size: cover;
    margin: 20px;
    padding-rigth: 0;
    border: 7px solid #55291e;


`;
