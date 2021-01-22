import { useLang } from 'utils/hooks/useLang'
import TermsKr from 'mdx/TermsKr.mdx'
import TermsEn from 'mdx/TermsEn.mdx'

export default function Terms() {
  const { lang } = useLang()

  return lang === 'kr' ? <TermsKr /> : <TermsEn />
}
