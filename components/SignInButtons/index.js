import Image from 'next/image'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Button = styled.button`
  box-sizing: border-box;
  background-color: #3b5998;
  border: none;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  color: white;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    filter: brightness(115%);
  }
`
const Button2 = styled.button`
  width: 240px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border: none;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  color: #757575;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    filter: brightness(115%);
  }
`

export const FacebookButton = () => (
  <Button>
    <Typography variant="body1" sx={{ padding: 1, fontWeight: 'bold', whiteSpace: 'pre' }}>
      <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
      {'    '}
      {'Sign in with Facebook'}
    </Typography>
  </Button>
)

export const GoogleButton = () => (
  <Button2 style={{ display: 'flex', alignItems: 'center' }}>
    <Image src="/assets/google.svg" alt="google-logo" width={36} height={36} />
    <Typography variant="body1" sx={{ padding: 1, fontWeight: 'bold', whiteSpace: 'pre' }}>
      {'Sign in with Google'}
    </Typography>
  </Button2>
)
