import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="FWD Insurtech Hackathon">
    <Container>
      <Title>
        FWD Insurtech Hackathon <Badge>2021-</Badge>
      </Title>
      <P>
        A hackathon to supercharge the development of dApps, Web3 apps, and
        DeFi projects. Winners will be able to showcase their projects to
        prominent Venture Capitals.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fwdstartupstudio.com/hackathon">
            https://fwdstartupstudio.com/hackathon{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Team &amp; Idea</Meta>
          Team of 2 working on incorporating text/document recognition using AWS Textract and allowing more granular monthly insurance repayments for SME and Corporate clients.
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Moralis, TailwindCSS, Web3JS, Hardhat, Solidity</span>
        </ListItem>
      </List>
      <WorkImage src="/images/fwd.png" />
    </Container>
  </Layout>
)

export default Work
