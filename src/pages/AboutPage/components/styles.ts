import styled from 'styled-components'

const StyledAbout = styled.div`
    margin-bottom: 48px;
`

const Title = styled.h5`
    margin-bottom: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.arrowBackgroundColor};
    font-size: 36px;
    
    @media screen and (max-width: 1000px) { 
        margin-bottom: 16px;
    }
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.arrowBackgroundColor};
`

const AboutLink = styled.div`
    color: var(--green);
    font-weight: 600;
    font-size: 16px;
    margin-top: 8px;
    cursor: pointer;
`

const Headline = styled.p`
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 24px;
    color: ${(props) => props.theme.arrowBackgroundColor};
`

const SubTitle = styled.p`
    margin: 40px 0 8px;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.arrowBackgroundColor};
`

const Small = styled.p`
    margin-top: 8px;
    color: var(--grey60);
    font-weight: 400;
    font-size: 14px;
`

export { StyledAbout, Title, Text, AboutLink, Headline, SubTitle, Small }
