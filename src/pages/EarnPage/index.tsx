import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Faq } from '../../components/Faq'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import {
    AdaptiveTable,
    Card,
    CardContentText,
    CardSubLink,
    Item,
    Pagination,
    RewardTitle,
    Row,
    RowText,
    SmallCardContent,
    StyledEarn,
    SubText,
    TableGrid,
    TableHead,
    TableRow,
    Title,
} from './components/styles'

const EarnPage = () => {
    const swiperRef = useRef<HTMLElement | null>(null)

    const tablet = useMediaQuery('(max-width: 768px)')
    const mobile = useMediaQuery('(max-width: 480px)')

    const getSlidesPerView = useMemo(() => {
        if (mobile) return 1.2
        if (tablet) return 1.8
        return 3
    }, [tablet, mobile])

    return (
        <StyledEarn>
            <div className="container">
                <Title>Earn crypto by referring friends</Title>
                <SubText>
                    Share your referal link, invite friend and you'll be
                    rewarded with 50% of their trading fees
                </SubText>
                <div className="swiper">
                    <Swiper
                        // onSlideChange={}
                        spaceBetween={16}
                        onInit={(v) => {
                            swiperRef.current = v.el
                        }}
                        slidesPerView={getSlidesPerView}
                        observeParents={true}
                        observer={true}
                        noSwiping={false}
                        noSwipingClass={'swiper-slide'}
                        // style={{ padding: '0 20px' }}
                    >
                        <SwiperSlide>
                            <Card>
                                <Row>
                                    <img src="/images/earn/link.svg" alt="" />
                                    <RowText>Referal</RowText>
                                </Row>
                                <SmallCardContent>
                                    borb.fi/?ref=BgS...t73yhz7olv
                                </SmallCardContent>
                                <CardSubLink>
                                    <p>Copy</p>
                                    <img src="/images/earn/copy.svg" alt="" />
                                </CardSubLink>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Row>
                                    <img
                                        src="/images/earn/usdc_logo.svg"
                                        alt=""
                                    />
                                    <RowText>USDC</RowText>
                                </Row>
                                <CardContentText>$4673</CardContentText>
                                <CardSubLink>
                                    <p>Claim</p>
                                    <img src="/images/earn/arrow.svg" alt="" />
                                </CardSubLink>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card>
                                <Row>
                                    <img
                                        src="/images/earn/usdt_logo.svg"
                                        alt=""
                                    />
                                    <RowText>USDT</RowText>
                                </Row>
                                <CardContentText>$740</CardContentText>
                                <CardSubLink>
                                    <p>Claim</p>
                                    <img src="/images/earn/arrow.svg" alt="" />
                                </CardSubLink>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <RewardTitle>Reward</RewardTitle>
                <div className="titles">
                    <p>Wallet address</p>
                    <p>Asset</p>
                    <p>Reward earned</p>
                </div>
                <TableGrid>
                    <TableHead></TableHead>
                    <TableRow>
                        <Item>
                            <p>0x24e78dvb8ybsalUGHGbdc98e3er3</p>
                            <p>USDC</p>
                            <p>$23</p>
                        </Item>
                        <Item>
                            <p>0x24e78dvb8ybsalUGHGbdc98e3er3</p>
                            <p>USDC</p>
                            <p>$23</p>
                        </Item>
                        <Item>
                            <p>0x24e78dvb8ybsalUGHGbdc98e3er3</p>
                            <p>USDC</p>
                            <p>$23</p>
                        </Item>
                        <Item>
                            <p>0x24e78dvb8ybsalUGHGbdc98e3er3</p>
                            <p>USDC</p>
                            <p>$23</p>
                        </Item>
                        <Item>
                            <p>0x24e78dvb8ybsalUGHGbdc98e3er3</p>
                            <p>USDC</p>
                            <p>$23</p>
                        </Item>
                    </TableRow>
                </TableGrid>
                <AdaptiveTable>
                    <div className="titles">
                        <p>Wallet address</p>
                        <p>Reward earned</p>
                    </div>
                    <div className="content">
                        {Array(10)
                            .fill('')
                            .map((item) => (
                                <div className="row">
                                    <div className="left">
                                        <p>0x24e78dvb8ybsalUGHG…</p>
                                        <span>USDC</span>
                                    </div>
                                    <p className="cost">$23</p>
                                </div>
                            ))}
                    </div>
                </AdaptiveTable>
                <Pagination>
                    <img src="/images/earn/earn_pagination.svg" alt="" />
                    <img
                        src="/images/earn/earn_pagination.svg"
                        alt=""
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </Pagination>
                <div className="faq">
                    <Faq />
                </div>
            </div>
        </StyledEarn>
    )
}

export default EarnPage
