import React from 'react'
import { Text, Box } from '@chakra-ui/react'
import { AccordionPostProps } from '../../../types/types'
import PostText from '../../atoms/postText'

type AccordionOrganismsProps = {
    city: AccordionPostProps
}

const CityInfo = ({
  city
}: AccordionOrganismsProps) => {
  return (
    <Box as='div'>
      {city.stages?.map((stage, index) => (
        <Box as='div' py={2} key={index}>
          <Text
            color={stage.finished ? 'primary' : 'black'}
            py={1}
          >
            {stage.stage} ({stage.finished ? 'Encerrada' : stage.date}):
          </Text>
          <PostText
            fullText={stage.modalities}
            spacing={[1]}
            fontSize={['xs', 'sm']}
          />
          {(!stage.finished && stage.dueDate) &&
            <Text
              fontStyle='italic'
              fontSize={['xs', 'xs']}
              py={1}
            >
                Inscrições até {stage.dueDate}.
            </Text>
          }
        </Box>
      ))}

    </Box>
  )
}

export default CityInfo
