import React, { useContext, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe'
import { IMAGES } from 'src/theme/images.js'
import { useTranslation } from 'react-i18next'
import { LocalStore } from 'src/utils/storage.js'
import LanguageContext from 'src/context/TranslateContext.jsx'
import MenuComponent from 'src/components/menu/index.jsx'
import Page from 'src/components/page/index.jsx'

function Header() {
    const { i18n } = useTranslation()
    const { tHeader } = useContext(LanguageContext)
    const [ language, setLanguage ] = useState(LocalStore.get('language') || 'vn')

    const chooseLanguageItems = [
        {
            content: tHeader('vn'),
            image: IMAGES.VI_FLAG,
            value: 'vn',
        },
        {
            content: tHeader('en'),
            image: IMAGES.EN_FLAG,
            value: 'en',
        },
    ]

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then((r) => r)
        LocalStore.set('language', lang)
        setLanguage(lang)
    }

    return (
        <Box>
            <Page>
                <MenuComponent items={chooseLanguageItems} title={tHeader(`${language}`)} icon={faGlobe} onClick={handleChangeLanguage} />
            </Page>
            <Box></Box>
        </Box>
    )
}

export default Header
