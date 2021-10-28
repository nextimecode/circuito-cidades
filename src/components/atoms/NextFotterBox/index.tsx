import React from 'react'

import { Box, Text, Image } from '@chakra-ui/react'

type Props = {
  imgUrl: string;
  cityName: string
}

const NextFooterBox = ({
  imgUrl,
  cityName
}: Props) =>

  (
    <Box
      w={['100%', '180px']}
      h={['100%', '180px']}
      as='div'
      bg={'#FFFFFF'}
      boxShadow={'0px 4px 6px -2px rgba(45, 55, 72, 0.05), 0px 10px 15px -3px rgba(45, 55, 72, 0.1)'}
      p={3}
      borderRadius={'md'}
      display={['inline-flex', 'grid']}
      placeItems={['center']}
    >
      <Image
        w={['48px', '100px']}
        h={['48px', '100px']}
        src={imgUrl}
      />
      <Text
        fontSize="xs"
        color={'#4A5568'}
        align={'center'}
        py={1}
        px={[4, 0]}
      >
        {cityName}
      </Text>

    </Box>
  )

export default NextFooterBox
