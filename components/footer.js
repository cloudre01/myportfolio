import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as={'footer'} align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Alex Tan. All Rights Reserved.
    </Box>
  )
}

export default Footer
