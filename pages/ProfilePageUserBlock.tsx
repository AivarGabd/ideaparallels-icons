import { Card, Avatar, Grid, Button, Text, Tooltip, Row, Col, Spacer, Switch } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { HeartIcon } from './HeartIcon';
import { NotificationIcon } from './NotificationIcon';



export default function ProfilePageUserBlock() {
    

    return (
        <Card css={{ mw: "280px" }}>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={'https://storage.yandexcloud.net/ideaparallels/sddefault.jpg'}
                    showSkeleton
                    maxDelay={10000}
                    objectFit="cover"
                    width="100%"
                    height={100}
                />
                <Grid css={{ position: 'absolute', right: 0, margin: 4 }}>
                    <Tooltip content="Support work" placement='right'>
                        <Button
                            shadow
                            auto
                            color="error"
                            icon={<HeartIcon />} />
                    </Tooltip>
                    <Spacer y={0.2} />
                    <Tooltip content="Stay tuned for updates" placement='right'>
                        <Switch
                            checked={false}
                            color="success"
                            icon={<NotificationIcon />}
                        />
                    </Tooltip>
                </Grid>

                <Grid.Container
                    className="user-twitter-card__container"
                    css={{
                        mw: "none",
                        borderRadius: "$lg",
                        padding: "$sm"
                    }}
                >
                    <Row justify="space-between" align="center">
                        <Col span={0}>
                            <Avatar
                                size="lg"
                                src="https://storage.yandexcloud.net/ideaparallels/2FiwWZEB_400x400.jpg"
                                bordered
                            />
                        </Col>
                        <Col span={9}>
                            <Row>
                                <Grid xs={12} direction="column">
                                    <Text className="user-twitter-card__text" b size={15}>
                                        Aivar Gabdrahmanov
                                    </Text>
                                    <Text
                                        className="user-twitter-card__text"
                                        size={14}
                                        css={{ mt: "-$3" }}
                                        color="#888888"
                                    >
                                        <span style={{ color: '#1D9BF0', cursor: 'pointer' }}>
                                            @aivargab
                                        </span>
                                    </Text>
                                </Grid>
                            </Row>
                        </Col>
                    </Row>
                    <Grid.Container className="user-twitter-card__username-container">
                        <Grid xs={12}>
                            <Text
                                className="user-twitter-card__text"
                                size={14}
                                css={{ mt: "$1" }}
                                color="#888888"
                            >
                                Full-stack developer, startup founder
                            </Text>
                        </Grid>
                    </Grid.Container>

                    <Grid.Container
                        className="user-twitter-card__metrics-container"
                        justify="flex-start"
                        alignContent="center"
                    >
                        <Text className="user-twitter-card__text" size={14} color="#888888">
                            <Text
                                b
                                color="foreground"
                                className="user-twitter-card__text"
                                size={14}
                                css={{ mr: "$1" }}
                            >
                                20
                            </Text>
                            Following
                        </Text>
                        <Spacer inline x={0.5} />
                        <Text className="user-twitter-card__text" size={14} color="#888888">
                            <Text
                                b
                                color="foreground"
                                className="user-twitter-card__text"
                                size={14}
                                css={{ mr: "$1" }}
                            >
                                50
                            </Text>
                            Followers
                        </Text>
                        <Grid>
                            <Text h4>4 published articles</Text>
                        </Grid>
                    </Grid.Container>

                </Grid.Container>
            </Card.Body>

        </Card>
    )
}