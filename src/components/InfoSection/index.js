import React from 'react';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt}) => {
    return (
        <>
                <InfoContainer lightBg={lightBg} id={id}>
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                            </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img.default} alt={alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
        </>
    )
}

export default InfoSection;