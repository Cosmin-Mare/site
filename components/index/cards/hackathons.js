import CardModel from './card-model'
import { Box, Flex, Grid, Image, Link, Text } from 'theme-ui'
import Buttons from './button'
import Dot from '../../dot'
import { formatDate } from '../../../lib/dates'

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
        'linear-gradient(to bottom,rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
      opacity: 0.8,
      zIndex: 1
    }}
  />
)

export default function Hackathons({ data, stars }) {
  return (
    <CardModel
      color="white"
      sx={{
        backgroundColor: 'dark'
      }}
      stars={stars}
      github_link="https://github.com/hackclub/hackathons"
      highlight="blue"
    >
      <Image
        src="https://cloud-issl87d62-hack-club-bot.vercel.app/0bmc_1823.jpg"
        sx={{
          objectFit: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          ml: -4,
          mt: -4,
          zIndex: 0
        }}
        alt="O mulțime de hackeri care aclamă la Epoch"
      />
      <Cover />
      <Text
        variant="title"
        as="h3"
        sx={{ fontSize: ['36px', 4, 5], position: 'relative', zIndex: 2 }}
      >
        Hackathonuri pentru liceeni
      </Text>
      <Grid
        columns={[1, 1, 2]}
        sx={{ position: 'relative', zIndex: 2, minHeight: '200px' }}
      >
        <Box>
          <Text as="p" variant="subtitle">
            Susținem cea mai mare rețea de Hackathonuri pentru liceeni din lume.
            De la o comunitate online de organizatori la autocolante gratuite și
            multe altele!
          </Text>
          <Flex sx={{ flexDirection: 'column', mt: [3, 3, 4] }}>
            <Buttons
              id="19"
              icon="event-code"
              link="https://hackathons.hackclub.com"
              primary="blue"
            >
              Participă la un hackathon
            </Buttons>
            <Buttons
              id="20"
              icon="bolt"
              link="/hackathons"
            >
              Ești organizator? Află mai multe.
            </Buttons>
          </Flex>
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-end',
            alignSelf: 'flex-end',
            position: ['absolute', 'absolute', 'relative'],
            right: 0,
            bottom: 0,
            display: ['none', 'none', 'block']
          }}
        >
          <Box sx={{ width: 'fit-content', float: 'right' }}>
            <Text
              as="h4"
              sx={{ fontSize: 'small', width: '100%', textAlign: 'center' }}
            >
              <Dot /> Hackathonuri viitoare
            </Text>
            {data.slice(0, 5).map(data => (
              <Box
                sx={{
                  zIndex: '1',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'normal',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'small',
                  my: 2,
                  a: {
                    textDecoration: 'none',
                    color: 'white'
                  }
                }}
                key={data.name}
              >
                {data.logo && (
                  <Box
                    sx={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.375) 75%), url('${data.banner}')`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'circle',
                      height: ['20px', '25px', '30px'],
                      width: ['20px', '25px', '30px'],
                      mr: '10px'
                    }}
                  >
                    <Image
                      src={data.logo}
                      alt={`${data.name} logo`}
                      loading="lazy"
                      sx={{
                        height: '70%',
                        width: '70%',
                        objectFit: 'contain',
                        borderRadius: 'default'
                      }}
                    />
                  </Box>
                )}
                <Flex sx={{ flexDirection: 'column' }}>
                  <Link
                    href={data.website}
                    as="a"
                    target="_blank"
                    sx={{
                      color: 'inherit',
                      textDecoration: 'none',
                      fontWeight: 'bold'
                    }}
                  >
                    {data.name}
                  </Link>
                  <Text
                    as="h6"
                    sx={{
                      fontWeight: '400',
                      fontSize: '0.8em',
                      color: 'sunken'
                    }}
                  >
                    {formatDate('mmmm d', new Date(data.start))}
                  </Text>
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
      </Grid>
      <Flex
        sx={{
          flexDirection: 'row',
          position: 'relative',
          alignItems: 'center',
          mt: 2,
          justifyContent: 'space-between',
          display: ['block', 'block', 'none']
        }}
      >
        <Text sx={{ fontSize: 'small', color: 'white' }}>
          Hackathonuri viitoare:
        </Text>
        <Flex sx={{ gap: '10px' }}>
          {data.slice(0, 2).map(data => (
            <Box
              sx={{
                zIndex: '1',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'normal',
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                fontSize: 'small',
                my: 2,
                a: {
                  textDecoration: 'none',
                  color: 'white'
                }
              }}
              key={data.name}
            >
              {data.logo && (
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.375) 75%), url('${data.banner}')`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'circle',
                    height: ['20px', '25px', '30px'],
                    width: ['20px', '25px', '30px'],
                    mr: '5px'
                  }}
                >
                  <Image
                    src={data.logo}
                    alt={`${data.name} logo`}
                    loading="lazy"
                    sx={{
                      height: '70%',
                      width: '70%',
                      objectFit: 'contain',
                      borderRadius: 'default',
                      fontSize: 'small'
                    }}
                  />
                </Box>
              )}
              <Link href={data.website}>{data.name}</Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </CardModel>
  )
}
