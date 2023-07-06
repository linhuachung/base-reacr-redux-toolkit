import React, { useState } from 'react'
import { Box } from '@chakra-ui/react';
import MenuComponent from '../../components/menu/index.jsx';
import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
import { IMAGES } from '../../theme/images.js';
import { useTranslation } from 'react-i18next';
import { LocalStore } from '../../utils/storage.js';
import Page from '../../components/page/index.jsx';

function Header() {
    const { i18n, t } = useTranslation('header')
    const [language, setLanguage] = useState(LocalStore.get('language') || 'vn')

    const chooseLanguageItems = [
        {
            content: t('vn'),
            image: IMAGES.VI_FLAG,
            value: 'vn'
        },
        {
            content: t('en'),
            image: IMAGES.EN_FLAG,
            value: 'en'
        }
    ]

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(r => r)
        LocalStore.set('language', lang)
        setLanguage(lang)
    }

    return (
        <Box>
            <Page>
                <Box>
                    <MenuComponent items={chooseLanguageItems} title={t(`${language}`)} icon={faGlobe}
                                   onClick={handleChangeLanguage}/>
                </Box>
                <Box></Box>
            </Page>
        </Box>
    )
}

export default Header
