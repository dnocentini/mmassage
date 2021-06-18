import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2c2b20;

    @media screen and (max-width: 768px) {
        height: 1100px;
    };
    media screen and (max-width: 480px) {
        height: 1300px;
    };    
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    };
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    };    
`; 

export const ServicesCard = styled.div`
    background: #e2dac3;
    border: 5px solid #55291e;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    };
`;

export const ServicesImg = styled.img`
    height: 150px;
    width: 200px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    color: #fff;
    font-size: 50px;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin-top: 35px;
    margin-bottom: 45px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    };
`;

export const ServicesP1 = styled.p`
    color: #e2dac3;
    max-width: 1040px;
    margin-bottom: 60px;
    font-size: 20px;
    line-height: 24px;
    
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP2 = styled.p`
    font-size: 1rem;
    text-align: center;
`;

export const ServicesB = styled.div`
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