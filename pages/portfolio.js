import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbOpenTunes from '../public/images/opentunes.png'
import thumbAvalanche from '../public/images/avalanche.png'
import thumbFwd from '../public/images/fwd.png'
import thumbFloppy from '../public/images/floppy.png'
import thumb8sian from '../public/images/8sian.png'
import thumbShopifyUpsell from '../public/images/shopifyupsell.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Freelance Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="opentunes"
            title="Opentunes"
            thumbnail={thumbOpenTunes}
          >
            A website for music artists to mint and sell their music NFTs.
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
        <Section>
          <WorkGridItem id="floppy" title="Floppy NFT" thumbnail={thumbFloppy}>
            A NFT colleciton launch with cool website design and mint function
            integrated on the website itself.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="8sian" title="8Sian NFT" thumbnail={thumb8sian}>
            8SIAN Collectivebles. <br />
            An ERC1155 NFT collection.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Heading as="h3" fontSize={20} mb={4}>
        Hackacthons
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
        <Section>
          <WorkGridItem
            id="fwd"
            title="FWD Start-up Studio Insurtech Hackathon"
            thumbnail={thumbFwd}
          >
            Regional Data Hackathon is organised by FWD Start-up studio (by FWD Takaful) & 1337 Ventures. Supported by MDEC and MRANTI. 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
