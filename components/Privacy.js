import { useLang } from 'utils/hook/useLang'
import PrivacyKr from 'mdx/PrivacyKr.mdx'
import PrivacyEn from 'mdx/PrivacyEn.mdx'

export default function Privacy() {
  const { lang } = useLang()

  return lang === 'kr' ? <PrivacyKr /> : <PrivacyEn />
}
