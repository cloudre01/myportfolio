import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOpenTunes from '../public/images/opentunes.png'
import thumbShopifyUpsell from '../public/images/shopifyupsell.png'
import thumbAvalanche from '../public/images/avalanche.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="opentunes"
            title="Opentunes"
            thumbnail={thumbOpenTunes}
          >
            <Text fontSize={10}>(WIP)</Text>A website for music artists to mint
            and sell their NFTs.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="shopifyupsell"
            title="Shopify Upsell"
            thumbnail={thumbShopifyUpsell}
          >
            An app that allows merchants to be able to setup post purchase
            offerings to buyers on Shopify.
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem id="thesocialr" title="The Socialr">
            A platform to connect business owners with influencers utilizing
            Facebook&apos;s Instagram API.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="komikinc"
            title="Komickinc"
            // thumbnail={thumbFourPainters}
          >
            A website for indie comic artists to share their work with readers.
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4}>
        Current Activity
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="avalanche"
            title="Avalanche Hackathon"
            thumbnail={thumbAvalanche}
          >
            A hackathon to supercharge the development of dApps, Web3 apps, and
            DeFi projects. Winners will be able to showcase their projects to
            prominent Venture Capitals.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
