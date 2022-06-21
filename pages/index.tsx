import type { NextPage } from 'next'
import React, { useState } from 'react';
import { Tooltip, Button, Grid, Col, Spacer, Container, Card, Row, Text, Avatar, Link } from "@nextui-org/react";
import ProfilePageUserBlock from './ProfilePageUserBlock';


const Home: NextPage = () => {

  return (
    <div style={{ margin: '10%' }}>
      <ProfilePageUserBlock />
    </div>
  )
}

export default Home
