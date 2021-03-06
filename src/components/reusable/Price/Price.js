import React from 'react';
import { 
    Container, 
    Wrapper, 
} from '../styled';

import { 
    PriceContainer,
    PriceRow,
    PriceIcon,
    PriceText,
    ButtonPrice,
    PriceRectangle,
    PriceArea,
    PriceWrapper,
    TitlePrice
} from './Price.elements';

function Price({mainPriceTitle, data, price, form, showLogInButton, showNewsletter }) {
    return (
        <Container>
            <Wrapper>
                <PriceWrapper showNewsletter={showNewsletter}>
                    <TitlePrice>{mainPriceTitle}</TitlePrice>
                    <PriceRectangle>
                        <PriceArea>
                            {price}
                        </PriceArea>
                        <PriceContainer>                  
                        {data.map((item) => {
                            return(
                            <PriceRow key={item.text} data={data}>
                                <PriceIcon src="/images/icons/done.svg" />
                                <PriceText>{item.text}</PriceText>
                            </PriceRow>
                            )
                        })
                        } 
                        {showLogInButton &&
                        <ButtonPrice href={form} target="blank" >MÁM ZÁJEM</ButtonPrice>
                        }
                    </PriceContainer> 
                    </PriceRectangle> 
                </PriceWrapper> 
            </Wrapper>
        </Container>
    )
}

export default Price;