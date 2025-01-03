import React, { useState } from 'react'
import Buttons from './button'
import CardModel from './card-model'
import { Box, Grid, Flex, Image, Text } from 'theme-ui'

/** @jsxImportSource theme-ui */

const Cover = () => (
  <Box
    sx={{
      position: 'absolute',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      backgroundImage:
        'linear-gradient(to bottom,rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
      opacity: 0.8,
      zIndex: 1
    }}
  />
)

export default function Clubs() {
  // let [fooRef, setFooRef] = useState('')
  // let [toggle, setToggle] = useState(true)

  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: 'red'
      }}
    >
      <Image
        src="https://cloud-5pdwvchgm-hack-club-bot.vercel.app/05851864a.jpg"
        alt="Întâlnire Hack Club Summer Creek, februarie 2020"
        sx={{
          objectFit: 'cover',
          position: 'absolute',
          width: '120%',
          height: '120%',
          ml: ['-24px', '-32px', '-32px', '-32px'],
          mt: ['-24px', '-32px', '-32px', '-32px'],
          zIndex: 0
        }}
      />
      <Cover />
      <Text
        variant="title"
        as="h3"
        sx={{
          borderRadius: 'default',
          px: 2,
          mx: [-2, 0],
          whiteSpace: [null, 'nowrap', 'nowrap'],
          fontSize: ['36px', 4, 5],
          position: 'relative',
          zIndex: 2,
          width: 'fit-content'
        }}
      >
        O rețea de 400+ de cluburi de programare
      </Text>
      <Grid columns={[1, 1, 2]} sx={{ position: 'relative', zIndex: 2 }}>
        <Box>
          <Text
            as="p"
            variant="subtitle"
            sx={{ textShadow: '1px 1px 5px black' }}
          >
            Alătură-te sau începe un Hack&nbsp;Club și fă parte dintr-o rețea
            de cluburi de programare de înaltă calitate, unde înveți să programezi
            construind lucruri.
          </Text>
          <Text
            as="p"
            variant="subtitle"
            sx={{ textShadow: '1px 1px 5px black' }}
          >
            Poți începe fără experiență și vei construi și lansa un proiect la
            fiecare întâlnire.
          </Text>
          <Flex sx={{ flexDirection: 'column', mt: [3, 3, 4] }}>
            <Buttons
              content="te vom sprijini cu conținut pentru întâlniri, autocolante și multe altele"
              id="2"
              icon="welcome"
              link="https://apply.hackclub.com/"
              primary="red"
            >
              Începe un club
            </Buttons>
          </Flex>
        </Box>
      </Grid>
    </CardModel>
  )
}
