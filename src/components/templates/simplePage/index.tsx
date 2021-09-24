import { Box } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import Header from '../../organisms/header'

type Props = {
  children: ReactNode
}

const SimplePage = ({
  children
}: Props) => {
  return (
    <React.Fragment>

      <main>
        <Header/>
        <Box as={'div'} pt={['50px', '92px']}>
          {children}
        </Box>
      </main>

      <footer>
        FOOTER
      </footer>

    </React.Fragment>
  )
}

export default SimplePage
