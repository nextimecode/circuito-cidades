import React, { useRef } from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Rerousel } from 'rerousel'

type Props = {
  images?: string[]
}

const HeroCarousel = ({ images }: Props) => {
  const customerLogo = useRef(null)
  return (
    <Box as="div" w={'100%'}>
      <Rerousel itemRef={customerLogo}>
        {images?.map(img => (
          <Image
            ref={customerLogo}
            key={img}
            width="100%"
            src={img}
            borderRadius={['none', 'md']}
            alt={'Imagem do slider'}
          />
        ))}
      </Rerousel>
    </Box>
  )
}

export default HeroCarousel
