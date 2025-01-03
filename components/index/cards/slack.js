import CardModel from './card-model'
import { Box, Flex, Grid, Heading, Image, Link, Text } from 'theme-ui'
import Buttons from './button'
import Event from '../events'
import Dot from '../../dot'
import Comma from '../../comma'
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
        'linear-gradient(to bottom,rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.95))',
      opacity: 0.8,
      zIndex: 1
    }}
  />
)
const Stats = ({ data, subheading, nonMobile = false }) => (
  <Box sx={{ display: nonMobile ? ['none', 'block'] : 'block' }}>
    <Heading
      variant="headline"
      as="h4"
      sx={{ mb: 0, pt: 2, fontSize: ['28px', '36px', '38px'] }}
    >
      <Comma>{data}</Comma>
    </Heading>
    <Text
      sx={{
        color: 'muted',
        fontSize: ['14px', '16px', '18px'],
        fontWeight: '400'
      }}
      as="h5"
    >
      {subheading}
    </Text>
  </Box>
)
export default function Slack({ data, slackKey, events }) {
  return (
    <CardModel
      color="white"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: t => t.util.gx('cyan', 'purple'),
        minHeight: ['500px', '400px'],
        py: [3, 3, 4]
      }}
    >
      <Image
        src="/home/slack_ama.webp"
        sx={{
          objectFit: 'cover',
          position: 'absolute',
          width: '100%',
          height: '100%',
          ml: ['-24px', '-32px', '-32px', '-32px'],
          mt: ['-24px', '-32px', '-32px', '-32px']
        }}
        alt="Slack AMA"
      />
      <Cover />
      <Grid sx={{ zIndex: 2 }}>
        <Text
          as="h3"
          variant="title"
          sx={{
            fontSize: ['36px', 4, 5],
            zIndex: 2,
            maxWidth: [null, null, '70%', null]
          }}
        >
          Comunitatea Noastră Online
        </Text>
      </Grid>
      <Grid columns={[1, 1, '1.6fr 1fr', '1.6fr 1fr']} sx={{ zIndex: 2 }}>
        <Box
          sx={{
            zIndex: 2
          }}
        >
          <Text
            as="p"
            variant="subtitle"
            sx={{ fontSize: [1, '16px', '24px'] }}
          >
            Programarea nu trebuie să fie o activitate solitară. La Hack&nbsp;Club,
            creem lucruri remarcabile împreună, și pe Slack vei găsi
            oameni fantastici cu care poți să-ți petreci timpul. Programează împreună, găsește-ți comunitatea de programare
            , visează ceva incredibil, sau doar #lounge.
          </Text>
          <Text as="p" variant="subtitle">
            Ocazional, invităm pe cineva cu care ne dorim să vorbim (precum Sal
            Khan, George Hotz, and Lady Ada) și organizăm un{' '}
            <Link
              href="https://hackclub.com/amas"
              target="_blank"
              rel="noopener"
              sx={{ color: 'inherit' }}
            >
              AMA
            </Link>{' '}
            cu ei.{' '}
          </Text>
          <Event events={events} />
          <Buttons id="13" link="/slack" icon="slack" primary="purple">
            Intră pe Slack
          </Buttons>
          <Grid
            sx={{
              zIndex: 2,
              display: data?.chats_channels_count_1d > 0 ? 'block' : 'none'
            }}
          >
            <Box
              sx={{
                background: 'rgb(0,0,0,0.6)',
                height: ['130px', '170px', '170px', '100%'],
                position: ['relative', 'relative', 'absolute'],
                zIndex: 3,
                width: ['120%', '120%', '260px'],
                right: 0,
                top: [null, null, 0],
                mt: [3, 3, 0],
                ml: ['-10%', '-10%', '-5%'],
                mb: ['-10%', '-10%', '-5%'],
                p: 4,
                py: [3, 3, 2]
              }}
            >
              <Flex
                sx={{
                  flexDirection: ['row', 'row', 'column'],
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  textAlign: 'center'
                }}
              >
                <Stats
                  data={data.readers_count_1d}
                  subheading="Currently Online"
                />
                <Stats
                  data={data.chats_channels_count_1d}
                  subheading="Total Channels"
                  nonMobile={true}
                />
                <Stats
                  data={data.messages_count_1d}
                  subheading="Daily Messages"
                />
                <Stats
                  data={data.total_members_count}
                  subheading="Total Members"
                />
              </Flex>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </CardModel>
  )
}
