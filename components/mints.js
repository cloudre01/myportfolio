import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import SmileyContract from '../contracts/Smileys.json'
import { Button, Box, Image, Heading, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Mint = () => {
  const [web3, setWeb3] = useState(null)
  const [tokenId, setTokenId] = useState(20)
  const [tokenURI, setTokenURI] = useState(null)

  const getWeb3 = async isFirstLoad => {
    try {
      let web3
      if (window.ethereum) {
        // Ask User permission to connect to Metamask
        if (!isFirstLoad) {
          try {
            await web3.provider.send('eth_requestAccounts')
          } catch (err) {
            console.log('Transaction rejected by user:', err)
          }
        }
        web3 = new ethers.providers.Web3Provider(window.ethereum)
      } else if (window.web3) {
        web3 = new ethers.providers.Web3Provider(window.web3.currentProvider)
      } else {
        window.alert(
          'Non-Ethereum browser detected. Please install MetaMask plugin'
        )
        return
      }
      setWeb3(web3)
    } catch (err) {
      console.log('Error in Web3.js -> getWeb3(): ', err)
    }
  }

  const mintFnc = async () => {
    await web3.provider.send('eth_requestAccounts')
    const signer = web3.getSigner()

    const smiley = new ethers.Contract(
      SmileyContract.address,
      SmileyContract.abi,
      signer
    )

    // Minting
    smiley.once('Transfer', async (_to, _from, id) => {
      setTokenId(+id)
      // We get back base64 data
      const base64Metadata = await smiley.tokenURI(+id)
      console.log('tokenMedata', tokenMetadata)
      const json = Buffer.from(
        base64Metadata.substring(29),
        'base64'
      ).toString()
      // Parse JSON string
      const tokenMetadata = JSON.parse(json)

      // Set tokenURI to image property
      setTokenURI(tokenMetadata.image)
      console.log('URI:', tokenURI)
    })
    const result = await smiley.mintItem()
    const tx = await result.wait()
    console.log('result:', result)
    console.log('tx:', tx)
    // Get Token ID from Emitted Transfer Event
    const tokenId = +tx.events?.[0].args?.[2]
    console.log('tokenId', tokenId)
  }

  useEffect(() => {
    const init = async () => {
      await getWeb3(true)
    }
    init()
  }, [])

  useEffect(() => {
    console.log('UE tokenURI:', tokenURI)
  }, [tokenURI])

  return (
    <>
      <Button colorScheme="teal" onClick={mintFnc}>
        Mint
      </Button>
      {tokenURI && (
        <Box
          border="1px solid white"
          backgroundColor="gray.100"
          p="25px"
          borderRadius="25px"
          mt={8}
        >
          <Heading as="h4" fontSize={20}>
            Your NFT
          </Heading>
          <Box display="flex" justifyContent="center" my={4}>
            <Image src={tokenURI} alt="NFT" />
          </Box>
          <Link
            href={`https://testnets.opensea.io/assets/0x0d826018b53f935572352d5b0c9440e83288e729/${tokenId}`}
          >
            Check out your NFT on OpenSea
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Box>
      )}
    </>
  )
}

export default Mint
