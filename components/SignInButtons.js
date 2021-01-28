import Image from 'next/image'
import styled from '@emotion/styled'
import { Box, Typography } from '@material-ui/core'
import withTexts from 'utils/hoc/withTexts'

const SignInButtons = ({ texts }) => {
  const FacebookStyledBtn = styled.button`
    width: 100%;
    box-sizing: border-box;
    background-color: #1877f2;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border: none;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      background-color: #3b5998;
    }
  `
  const GoogleStyledBtn = styled.button`
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border: none;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    color: #333333;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      background-color: #efefef;
    }
  `

  const NaverStyledBtn = styled.button`
    width: 100%;
    box-sizing: border-box;
    background-color: #1ec800;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border: none;
    display: inline-block;
    text-align: center;
    border-radius: 3px;
    color: white;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
      background-color: #2db400;
    }
  `

  const FacebookButton = () => (
    <FacebookStyledBtn style={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1, textAlign: 'left', marginLeft: 1 }}>
        <Image src="/assets/facebook.png" alt="facebook-logo" width={24} height={24} />
      </Box>
      <Typography variant="body1" sx={{ padding: 1, fontWeight: 'bold', whiteSpace: 'pre' }}>
        {texts.facebook}
      </Typography>
      <Box sx={{ flex: 1 }} />
    </FacebookStyledBtn>
  )

  const GoogleButton = () => (
    <GoogleStyledBtn style={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1, textAlign: 'left', marginLeft: 1 }}>
        <Image src="/assets/google.svg" alt="google-logo" width={20} height={20} />
      </Box>
      <Typography variant="body1" sx={{ padding: 1, fontWeight: 'bold', whiteSpace: 'pre' }}>
        {texts.google}
      </Typography>
      <Box sx={{ flex: 1 }} />
    </GoogleStyledBtn>
  )

  const NaverButton = () => (
    <NaverStyledBtn style={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ flex: 1, textAlign: 'left' }}>
        <Image src="/assets/naver.png" alt="naver-logo" width={36} height={36} />
      </Box>
      <Typography variant="body1" sx={{ padding: 1, fontWeight: 'bold', whiteSpace: 'pre' }}>
        {texts.naver}
      </Typography>
      <Box sx={{ flex: 1 }} />
    </NaverStyledBtn>
  )

  const dividerColor = '#757575'

  const OrDivider = () => (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: `1px solid ${dividerColor}`,
          margin: 'auto',
          marginRight: 2
        }}
      />
      <Typography variant="body1" gutterBottom sx={{ color: dividerColor }}>
        OR
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: `1px solid ${dividerColor}`,
          margin: 'auto',
          marginLeft: 2
        }}
      />
    </Box>
  )

  return (
    <Box
      sx={{
        flex: 'display',
        flexDirection: 'column',
        '& > * + *': { marginTop: 2, marginBottom: 2 }
      }}
    >
      <OrDivider />
      <Typography variant="body2" sx={{ marginTop: 4, marginBottom: 4, whiteSpace: 'pre-line' }}>
        {texts.socialSignInAgreement}
      </Typography>
      <NaverButton />
      <FacebookButton />
      <GoogleButton />
    </Box>
  )
}

SignInButtons.displayName = 'SignInButtons'

export default withTexts(SignInButtons)
