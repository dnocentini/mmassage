import React from 'react';
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import Image from '../../images/BG1.jpeg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesImg,
    ServicesH2,
    ServicesP1,
    ServicesP2,
    ServicesB,
    ImageB
} from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>MASSAGES</ServicesH1>
                <ServicesP1>Our massage therapy services are designed to be relaxing and restorative. Led by Louisa Tomaio, a natural health practitioner with over 15 years of experience in the healthcare field, our highly-trained team offers the following massage therapy modalities to root out pain and tension at its source.</ServicesP1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesImg src={img1}/> 
                        <ServicesH2>DEEP TISSUE MASSAGE</ServicesH2>
                        <ServicesP2>This therapeutic technique focuses on deeper muscle layers to target adhesions and stiffness that builds up due to over, under and improper use of muscles, all leading to reduced circulation.</ServicesP2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImg src={img2}/>
                        <ServicesH2>TRIGGER POINT THERAPY</ServicesH2>
                        <ServicesP2>Hypersensitive areas in tight muscle bands, known as “trigger points,” cause pain at the site and can refer pain to other areas of the body. Releasing these points improves treatment outcomes.</ServicesP2>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesImg src={img3}/>
                        <ServicesH2>SWEDISH MASSAGE</ServicesH2>
                        <ServicesP2>Designed to relax the entire body by rubbing the muscles in long, gliding strokes in the direction of blood returning to the heart. This massage is the perfect way to de-stress after a difficult day.</ServicesP2>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
            <ServicesB>
                <ImageB src={Image} />
            </ServicesB>
        </>
    )
}

export default Services;