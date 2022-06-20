import type { NextPage } from 'next'
import React, { useState } from 'react';
import NextLink from 'next/link'
import { Tooltip, Button, Grid, Col, Spacer, Container, Card, Row, Text, Avatar, Link } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { UserTwitterCard } from './UserTwitterCard'
import { UserTwitterCard1 } from './TwitterUserCard';
import { TrashIcon } from './TrashIcon';
import { ArticlePreview } from './ArticlePreview';


import { BiNetworkChart, BiHomeAlt, BiTrash } from 'react-icons/bi'
import { MdClose } from 'react-icons/md';
import { HiDotsVertical, HiOutlineLightBulb, HiOutlinePencil } from 'react-icons/hi';
import { FiChevronsLeft, FiChevronsRight, FiExternalLink } from 'react-icons/fi';
import { CgChevronDown, CgChevronRight, CgChevronLeft, CgChevronUp } from 'react-icons/cg';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { TbUnlink } from 'react-icons/tb';
import { FaRegCalendarCheck, FaGlasses } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { IoMdAlert } from 'react-icons/io';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { TbBookmark, TbBookmarks } from 'react-icons/tb'


const Home: NextPage = () => {


  const size = 35
  const arrayIcons: any = []
  arrayIcons.push(<BiNetworkChart size={size} />)
  arrayIcons.push(<BiHomeAlt size={size} />)
  arrayIcons.push(<BiTrash size={size} />)
  arrayIcons.push(<MdClose size={size} />)
  arrayIcons.push(<HiDotsVertical size={size} />)
  arrayIcons.push(<HiOutlineLightBulb size={size} />)
  arrayIcons.push(<HiOutlinePencil size={size} />)
  arrayIcons.push(<FiChevronsLeft size={size} />)
  arrayIcons.push(<FiChevronsRight size={size} />)
  arrayIcons.push(<FiExternalLink size={size} />)
  arrayIcons.push(<CgChevronDown size={size} />)
  arrayIcons.push(<CgChevronRight size={size} />)
  arrayIcons.push(<CgChevronLeft size={size} />)
  arrayIcons.push(<CgChevronUp size={size} />)
  arrayIcons.push(<RiCheckboxBlankCircleFill size={size} />)
  arrayIcons.push(<RiCheckboxBlankCircleLine size={size} />)
  arrayIcons.push(<TbUnlink size={size} />)
  arrayIcons.push(<FaRegCalendarCheck size={size} />)
  arrayIcons.push(<FaGlasses size={size} />)
  arrayIcons.push(<BsPlusLg size={size} />)
  arrayIcons.push(<IoMdAlert size={size} />)
  arrayIcons.push(<BsChevronLeft size={size} />)
  arrayIcons.push(<BsChevronRight size={size} />)
  arrayIcons.push(<TbBookmark size={size} />)
  arrayIcons.push(<TbBookmarks size={size} />)


  return (
    <div style={{ margin: '10%' }}>
      <div style={{ width: 50 }}>
        <Avatar
          text="2"
          color="error"
          textColor="white"
          size="xs"
          style={{ marginBottom: -13, marginLeft: 8 }}
        />
        <IconContext.Provider value={{ className: "icon-button-Svg" }}>
          <FiExternalLink size={23} />
        </IconContext.Provider>
      </div>
      <div>
  

        <Card css={{ mw: "250px" }}>
          <Card.Body>
            <Text size="1em">Recourses of 'How to find users' got <b>3</b> new updates</Text>
          </Card.Body>
        </Card>
        
      </div>


      <div>
        <Card css={{ backgroundColor: 'var(--border-color)', mw: "270px", }} >
          <Row>
            <Grid.Container
              className="user-twitter-card__container"
              css={{
                mw: "270px",
                borderRadius: "$lg",
                padding: "$sm"
              }}
            >

              <Grid.Container direction='row'>
                <Tooltip placement="top" content={<UserTwitterCard1 />}>
                  <Grid.Container>
                    <Row justify="space-between" align="center">

                      <Avatar
                        size="md"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        rounded
                      />

                      <Spacer x={0.5} />
                      <Row>
                        <Grid xs={12} direction="column">
                          <Text className="user-twitter-card__text" b size={15}>
                            Zoey Lang
                          </Text>
                        </Grid>
                      </Row>
                    </Row>
                  </Grid.Container>
                </Tooltip>
                <Spacer x={2.5} />
                <Grid>
                  <Tooltip content="Remove resource" color="invert">
                    <Button auto color="error" flat>
                      <TrashIcon />
                    </Button>
                  </Tooltip>
                </Grid>

              </Grid.Container>

              <Grid.Container className="user-twitter-card__username-container">
                <Grid xs={12}>
                  <Tooltip content={<ArticlePreview />} placement="bottom">
                    <Link block color="secondary" href="#">
                      Openphone - How we got to 1000 paying users
                    </Link>
                  </Tooltip>
                </Grid>
              </Grid.Container>
            </Grid.Container>
          </Row>
          <Card css={{ backgroundColor: 'var(--card-bg-color)' }} variant="bordered">
            <Card.Header>
              <Text b>Updates from your last visit</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Text>+1 link</Text>
              <Text>+2 backlink</Text>
            </Card.Body>
          </Card>
        </Card>
      </div>


      <div className='main-card'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <div style={{ width: 600, margin: 'auto' }}>
        {
          arrayIcons.map((e: any, i: any) => {
            return (
              <div style={{ display: 'inline-block' }} key={`div${i}`}>
                <button className='icon-button'>
                  <IconContext.Provider value={{ className: "icon-button-Svg" }} key={i}>{e}</IconContext.Provider>
                </button>
              </div>
            )
          })
        }
      </div>
      <div className="box">
        <div className="row header">
          <b>header</b>
        </div>
        <div className="row content">
          <p>
            <b>content</b>
            (fills remaining space)
          </p>
        </div>
        <div className="row footer">
          <p><b>footer</b> (fixed height)</p>
        </div>
      </div>
      <div>
        <UserTwitterCard />
      </div>

    </div>

  )
}

export default Home
