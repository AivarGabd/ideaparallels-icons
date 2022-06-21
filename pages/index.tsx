import type { NextPage } from 'next'
import React, { useState } from 'react';
import NextLink from 'next/link'
import { Tooltip, Button, Grid, Col, Spacer, Container, Card, Row, Text, Avatar, Link } from "@nextui-org/react";
import { IconContext } from "react-icons";
import { UserTwitterCard } from './UserTwitterCard'
import { UserTwitterCard1 } from './TwitterUserCard';
import { TrashIcon } from './TrashIcon';
import { ArticlePreview } from './ArticlePreview';
import ProfilePageUserBlock from './ProfilePageUserBlock';
import { Suspense } from 'react';


const Home: NextPage = () => {

  return (
    <div style={{ margin: '10%' }}>
      <ProfilePageUserBlock />
    </div>
  )
}

export default Home
