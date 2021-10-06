import React from 'react'
import { Text, VStack, Link } from '@chakra-ui/react'
import { AccordionPostProps } from '../../../types/types'
import PostText from '../../atoms/postText'

type AccordionOrganismsProps = {
    modality: AccordionPostProps
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
      >
            Regulamento da Modalidade {modality.title}
      </Link>

    </VStack>
  )
}

export default ModalityInfo
