import styled from 'styled-components'

const StyledAbout = styled.div``

const Title = styled.h5`
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
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
`

const SubTitle = styled.p`
    margin: 40px 0 8px;
    font-weight: 600;
    font-size: 16px;
`

const Small = styled.p`
    margin-top: 8px;
    color: var(--grey60);
    font-weight: 400;
    font-size: 14px;
`

export { StyledAbout, Title, Text, AboutLink, Headline, SubTitle, Small }
