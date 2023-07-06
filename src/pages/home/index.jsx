import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { GetListProducts } from 'src/store/reducer/Product/action.js'

function Home() {
    const { t } = useTranslation(['header', 'message'])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetListProducts())
    }, [dispatch])

    return (
        <Box padding={0}>
            {t('message:hello_word')}
            <br />
            {t('header:vn')}
            <div>adsfasdfa sdf</div>
        </Box>
    )
}

export default Home
