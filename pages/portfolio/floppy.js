import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="OpenTunes">
    <Container>
      <Title>
        Floppy NFT <Badge>2022-</Badge>
      </Title>
      <P>
        A NFT colleciton launch with cool website design and mint function
        integrated on the website itself.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.floppynft.io/">
            https://www.floppynft.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NextJS, EthersJS, Hardhat, Solidity</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
