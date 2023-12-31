import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import LanguageContext from 'src/context/TranslateContext.jsx'
import { GetListProducts } from 'src/store/reducer/Product/action.js'

function Home() {
    const { tMessage } = useContext(LanguageContext)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetListProducts())
    }, [ dispatch ])
    return (
        <Box padding={0}>
            {tMessage('hello_word')}

            <div>This is home page</div>
        </Box>
    )
}

export default Home
