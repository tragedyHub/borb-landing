import { useState } from 'react'
import styled from 'styled-components'

const DATA = [
    {
        title: 'What are event contracts?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'How does trading work?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'How is the market price determined?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'Who am I trading with?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'How is BorB regulated?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'How are customer deposits processed?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
    {
        title: 'Is this gambling?',
        subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    },
]

const Faq = () => {
    return (
        <FaqWrapper>
            <FaqTitle>FAQ</FaqTitle>
            <FaqList>
                {DATA.map(({ title, subtitle }, id) => (
                    <FaqItemWrapper
                        key={id}
                        title={title}
                        subtitle={subtitle}
                    />
                ))}
            </FaqList>
        </FaqWrapper>
    )
}

const FaqItemWrapper = ({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) => {
    const [open, setOpen] = useState(false)

    return (
        <FaqItem onClick={() => setOpen((prev) => !prev)}>
            <Title>{title}</Title>
            <PlusIcon open={open} />
            <Article open={open}>{subtitle}</Article>
        </FaqItem>
    )
}

const FaqWrapper = styled.div``

const FaqTitle = styled.h3`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: ${(props) => props.theme.faqColor};
    margin-bottom: 24px;
`
const FaqList = styled.ul``

const FaqItem = styled.li`
    border-bottom: 1px solid ${(props) => props.theme.faqBorderColor};
    margin-bottom: 24px;
    position: relative;
`

const Title = styled.h4`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: ${(props) => props.theme.faqColor};
`
const Article = styled.p<{ open: boolean }>`
    font-family: 'Inter';
    font-style: normal;
    overflow: hidden;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    padding-top: 24px;
    color: ${(props) => props.theme.faqColor};
    max-height: ${({ open }) => (open ? '500px' : '0')};
    margin-bottom: ${({ open }) => (open ? '24px' : '0')};

    transition: all 0.2s ease;
`

const PlusIcon = styled.span<{ open: boolean }>`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 0;
    top: 1px;
    display: flex;

    &::before,
    &::after {
        position: absolute;
        height: 1.5px;
        width: 100%;
        border-radius: 2px;
    }

    &::before {
        content: '';
        top: 50%;
        left: 0px;
        transform: translateY(-50%);
        background-color: ${(props) => props.theme.faqCrossColor};
    }

    &::after {
        content: '';
        top: -0.5px;

        background-color: ${({ open, theme }) =>
            !open ? `${theme.faqCrossColor}` : 'transparent'};

        transform: rotate(-90deg) translateX(-50%);
    }
`

export { Faq }
