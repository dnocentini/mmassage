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
    z-index: 1;
    height: 860px;
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
    
    @media screen and (max-width: 480px) {
        font-size: 18px;
    };
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 85%;
    margin: 0 0 10px 0;
    padding-rigth: 0;
    border: 7px solid #55291e;


`;

export const InfoB = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ImageB = styled.img`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
`;
