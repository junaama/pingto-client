import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    
    <Main>
      <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')} textAlign={useBreakpointValue({ base: 'center', md: 'left' })}>
      Meet your 2nd degree friends IRL.
      </Text>

      
    </Main>

    <Footer>
      <Text>Build ❤️ Community</Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
