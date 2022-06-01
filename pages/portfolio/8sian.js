import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="8SIAN">
    <Container>
      <Title>
        8sian NFT <Badge>2022-</Badge>
      </Title>
      <P>8SIAN Collectivebles NFT collection</P>
      <P>A unique and limited release of festive NFTs</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Opensea</Meta>
          <Link href="https://opensea.io/collection/8siancollectibles">
            https://opensea.io/collection/8siancollectibles{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Standard</Meta>
          <span>ERC1155 NFT</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>VanillaJS, HTML, CSS, Hardhat, Solidity</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
