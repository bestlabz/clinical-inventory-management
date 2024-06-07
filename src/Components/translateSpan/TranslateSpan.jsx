import React from 'react'
import { useTranslation } from 'react-i18next'

const TranslateSpan = ({children}) => {
    const {t} = useTranslation()
  return (
    <span>
        {t(children)}
    </span>
  )
}

export default TranslateSpan