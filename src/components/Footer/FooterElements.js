import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: #e2dac3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 40px;
    position: relative;
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterP = styled.p`
    color: #2c2b20;
    font-size: 16px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
    @media screen and (max-width: 480px) {
        font-size: 11px;
    }
`;