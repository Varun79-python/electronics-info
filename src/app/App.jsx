import { useEffect } from 'react'
import useStore from '../shared/store/useStore'
import themeConfig from './theme/theme'
import Providers from './providers'

export default function App() {
  const { theme, textScale } = useStore()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme || themeConfig.defaultTheme)
  }, [theme])

  useEffect(() => {
    const scale = themeConfig.textScales[textScale] || themeConfig.textScales.normal
    document.documentElement.style.fontSize = scale.base
  }, [textScale])

  return <Providers />
}
