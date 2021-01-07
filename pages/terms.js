/* eslint-disable react/display-name */

import dynamic from 'next/dynamic'
import { useLang } from 'utils/hooks/useLang'

export default function Privacy() {
  const { lang } = useLang()

  const PrivacyPolicyKr = dynamic(() => import('mdx/termsKr.mdx'), {
    loading: () => <p>Loading ...</p>,
    ssr: false
  })

  const PrivacyPolicyEn = dynamic(() => import('mdx/termsEn.mdx'), {
    loading: () => <p>Loading ...</p>,
    ssr: false
  })

  return <>{lang === 'kr' ? <PrivacyPolicyKr /> : <PrivacyPolicyEn />}</>
}
