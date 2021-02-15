/* eslint-disable react/display-name */

import { Typography } from '@material-ui/core'
import ReactMarkdown from 'react-markdown'

export default function MarkdownContent({ source }) {
  const renderers = {
    // image: ({ src, alt, ...rest }) => <Image src={src} alt={alt} {...rest} />,
    paragraph: (props) => <Typography variant={'body1'} {...props} />,
    heading: ({ level, ...rest }) => <Typography variant={`h${level}`} {...rest} />
  }

  return <ReactMarkdown source={source} renderers={renderers} escapeHtml={false} />
}
