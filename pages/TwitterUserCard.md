import React from "react";
import { Avatar, Row, Col, Text, Button, Spacer, Grid } from "@nextui-org/react";

export const UserTwitterCard1 = () => {
   

    return (
        <Grid.Container
            className="user-twitter-card__container"
            css={{
                mw: "250px",
                borderRadius: "$lg",
                padding: "$sm"
            }}
        >
            <Row justify="space-between" align="center">
                <Col span={3}>
                    <Avatar
                        size="lg"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        rounded
                    />
                </Col>
                <Col span={9}>
                    <Row>
                        <Grid xs={12} direction="column">
                            <Text className="user-twitter-card__text" b size={15}>
                                Zoey Lang
                            </Text>
                            <Text
                                className="user-twitter-card__text"
                                size={14}
                                css={{ mt: "-$3" }}
                                color="#888888"
                            >
                                @zoeylang
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
                        Openphone founder and CEO | Full-stack developer, @getnextui lover she/her
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
                        4
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
                        97.1K
                    </Text>
                    Followers
                </Text>
            </Grid.Container>
        </Grid.Container>
    );
};
