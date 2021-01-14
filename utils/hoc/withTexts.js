import { useLang } from 'utils/hooks/useLang'
import en from 'locales/en'
import kr from 'locales/kr'

export default function withTexts(Component) {
  return function getTexts(props) {
    const { lang } = useLang()

    const { displayName } = Component
    if (!displayName) {
      throw new Error('no displayName for Component')
    }

    const texts = lang === 'kr' ? kr : en
    const componentTexts = texts[displayName]

    return <Component {...props} texts={componentTexts} />
  }
}
