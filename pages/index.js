import {
  Container,
  Heading,
  Box,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a web developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            ThanhGiong
          </Heading>
          <p>Development</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/thanhgiong.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          He is a freelance and a full-stack developer based in Ha Noi with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2016 to present</BioYear>
          Works as a web developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Technologies
        </Heading>
        <Paragraph>
          ReactJs, VueJs, NodeJs, ExpressJs, PHP, Laravel, HTML, SCSS, AWS
        </Paragraph>
      </Section>

      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>Coding, Music, Photography, Machine Learning</Paragraph>
      </Section>

      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <BioSection>
          <BioYear>
            <a href="https://fb.com/giongbt" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </BioYear>
          <BioYear>
            <a
              href="https://www.linkedin.com/in/thanh-giong-700045130/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </BioYear>
          <BioYear>
            <a href="mailto:giongbt@gmail.com">Email</a>
          </BioYear>
        </BioSection>
      </Section>
    </Container>
  </Layout>
)

export default Home
