/* eslint-disable react/display-name */

import Image from 'next/image'
import { useMediaQuery, Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

export default function MarkdownContent({ source }) {
  const isMobile = useMediaQuery('(max-width:600px)')

  const renderers = {
    ...(isMobile && {
      image: ({ src, alt, ...rest }) => (
        <Image src={src} alt={alt} width={300} height={300} layout="responsive" {...rest} />
      )
    }),
    paragraph: (props) => <Typography component={'div'} variant={'body1'} {...props} />,
    heading: ({ level, ...rest }) => <Typography variant={`h${level}`} {...rest} />
  }

  return <ReactMarkdown source={source} renderers={renderers} escapeHtml={false} />
}
