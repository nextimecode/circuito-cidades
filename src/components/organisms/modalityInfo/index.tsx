import React from 'react'
import { Text, VStack, Link } from '@chakra-ui/react'
import { CityProps } from '../../../types/types'
import PostText from '../../atoms/postText'

type AccordionOrganismsProps = {
    modality: CityProps
}

const ModalityInfo = ({
  modality
}: AccordionOrganismsProps) => {
  return (
    <VStack as='div' spacing={3}>
      <PostText
        fullText={modality.content}
        spacing={[1]}
        fontSize={['xs', 'sm']}
      />
      <Text
        fontStyle='italic'
        fontSize={['xs', 'xs']}
        alignSelf='flex-start'
        py={1}
      >
            Categorias: {modality.categories}.
      </Text>
      <Link
        href={modality.rulesUrl}
        fontWeight={600}
        color='blue'
        fontStyle='italic'
        alignSelf='flex-start'
        target='_blank'
      >
            Regulamento da Modalidade {modality.title}
      </Link>

    </VStack>
  )
}

export default ModalityInfo
