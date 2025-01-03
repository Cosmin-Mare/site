import CardModel from './card-model'
import { Box, Card, Flex, Grid, Heading, Image, Text } from 'theme-ui'
import { useState } from 'react'
import Buttons from './button'

/** @jsxImportSource theme-ui */

const WorkshopCard = ({
  slug,
  name,
  description,
  img,
  height,
  section,
  ...props
}) => (
  <Card
    href={`https://workshops.hackclub.com/${slug}`}
    as="a"
    variant="interactive"
    target="_blank"
    rel="noopener"
    sx={{
      color: 'text',
      textDecoration: 'none',
      p: [0, 0],
      lineHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      height: '80%',
      '& span': {
        lineHeight: 1.25
      },
      maxWidth: '250px',
      height: '250px'
    }}
    {...props}
  >
    <Box sx={{ p: 3, lineHeight: 'body' }}>
      <Heading as="h4" sx={{ my: 1 }}>
        {name}
      </Heading>
      <Text variant="caption">{description}</Text>
    </Box>
    <Box
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <Image
        alt={`${name} demo`}
        src={img}
        sx={{ width: '100%', height: 'auto' }}
      />
    </Box>
  </Card>
)

export default function Workshops({ data, stars }) {
  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: 'elevated',
        background:
          'linear-gradient(32deg, rgba(51, 142, 218, 0.9) 0%, rgba(51, 214, 166, 0.9) 100%)',
        height: 'fit-content'
      }}
      github_link="https://github.com/hackclub/workshops"
      stars={stars}
      highlight="blue"
    >
      <Text variant="title" as="h3" sx={{ fontSize: ['36px', 4, 5] }}>
        Ateliere
      </Text>
      <Grid columns={[1, 2, 2]} sx={{ gap: 4, height: 'fit-content' }}>
        <Flex sx={{ flexDirection: 'column', height: 'fit-content' }}>
          <Text as="p" variant="subtitle">
            Peste 100 de tutoriale și idei de codare auto-ghidate, contribuite de comunitate.
            Învață să codifici construind, un proiect pe rând.
          </Text>
          <Buttons
            id="14"
            link="https://workshops.hackclub.com"
            icon="code"
            primary="white"
            sx={{ color: 'blue', mt: [3, 3, 4] }}
          >
            Explorează Atelierele
          </Buttons>
          <Buttons
            // content="click to learn more about how to submit a workshop"
            id="13"
            link="https://workshops.hackclub.com/submit-a-workshop/"
            icon="event-add"
          >
            Creează un Atelier
          </Buttons>
        </Flex>
        <Grid sx={{ display: ['none', 'grid', 'grid'] }} columns={[1, 1, 1, 2]}>
          <WorkshopCard
            key="splatter_paint"
            slug="splatter_paint"
            name="Splatter Paint"
            description="Vopsește colorat și haotic în browser cu Paper.js"
            img="/home/workshops/splatter_paint.png"
          />
          <WorkshopCard
            key="particle_physics"
            slug="particle_physics"
            name="Particle Physics"
            description="Creează o simulare de fizică a particulelor cu p5.js"
            img="/home/workshops/particle_physics.png"
            sx={{ display: ['none', 'none', 'none', 'flex'] }}
          />
        </Grid>
      </Grid>
    </CardModel>
  )
}
