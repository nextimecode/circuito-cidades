import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { CityProps } from '../../../types/types'
import PostText from '../../atoms/postText'

type AccordionOrganismsProps = {
  city: CityProps
}

const CityInfo = ({ city }: AccordionOrganismsProps) => {
  return (
    <Box as="div">
      {city.levels?.map(level => (
        <Box as="div" py={2} key={level.id}>
          <Text color={level.finished ? 'primary' : 'black'} py={1}>
            {level.title} ({level.finished ? 'Encerrada' : level.date}):
          </Text>
          <PostText description={level.modalities} spacing={[1]} fontSize={['xs', 'sm']} />
          {!level.finished && level.dueDate && (
            <Text fontStyle="italic" fontSize={['xs', 'xs']} py={1}>
              Inscrições até {level.dueDate}.
            </Text>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default CityInfo
