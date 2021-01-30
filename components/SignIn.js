import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, useField } from 'formik'
import { Paper, TextField, Button, Typography, Box, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as yup from 'yup'

import { useAuth } from 'utils/auth/firebaseClient'
import withTexts from 'utils/hoc/withTexts'
import CustomDialog2 from 'components/CustomDialog2'
import { FacebookButton, GoogleButton, NaverButton, OrDivider } from 'components/SocialButtons'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '460px',
    marginTop: theme.spacing(8)
  },
  textField: {
    width: '100%'
  }
}))

const SignIn = ({ texts }) => {
  const { user, signIn, signInWithGoogle, signInWithFacebook, signInWithNaver } = useAuth()
  const router = useRouter()
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = useState(false)

  const MyTextField = (props) => {
    const [field, meta] = useField(props)
    return (
      <>
        <TextField
          margin="dense"
          className={classes.textField}
          {...field}
          {...props}
          error={Boolean(meta.touched && meta.error)}
          helperText={meta.touched && meta.error ? meta.error : ''}
          variant="outlined"
        />
      </>
    )
  }

  const validationSchema = yup.object({
    email: yup.string().required(texts.emailRequired).email(texts.emailInvalid),
    password: yup.string().required(texts.passwordRequired)
  })

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h5" align="center">
        {texts.signIn}
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values.email, values.password)
            .then(() => {
              router.push('/')
            })
            .catch((error) => {
              setSubmitting(false)
              console.log('error signing up:', error)
            })
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className={classes.form}>
            <MyTextField required name="email" type="email" placeholder={texts.email} />
            <MyTextField required name="password" type="password" placeholder={texts.password} />

            <Typography
              variant="body2"
              display="inline"
              sx={{ color: '#828282', whiteSpace: 'pre' }}
            >
              {texts.forgotPassword}
            </Typography>
            <Link
              href="#"
              variant="body2"
              display="inline"
              onClick={(e) => {
                e.preventDefault()
                setDialogOpen(true)
              }}
            >
              {texts.resetPassword}
            </Link>

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              fullWidth
              sx={{ marginTop: 6 }}
            >
              <Typography variant="body1" sx={{ padding: '3px', fontWeight: 'bold' }}>
                {texts.signInLabel}
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body2" display="inline" sx={{ whiteSpace: 'pre' }}>
          {texts.noAccount}
        </Typography>
        <Link
          href="#"
          variant="body2"
          display="inline"
          onClick={(e) => {
            e.preventDefault()
            router.push('/signup')
          }}
        >
          {texts.createAccount}
        </Link>
      </Box>

      <Box sx={{ flex: 'display', flexDirection: 'column' }}>
        <Box sx={{ marginBottom: 4 }} />
        <OrDivider />
        <Box sx={{ marginBottom: 4 }} />
        <NaverButton label={texts.naver} handleClick={() => signInWithNaver()} />
        <Box sx={{ marginBottom: 2 }} />
        <FacebookButton label={texts.facebook} handleClick={() => signInWithFacebook()} />
        <Box sx={{ marginBottom: 2 }} />
        <GoogleButton label={texts.google} handleClick={() => signInWithGoogle()} />
        <Box sx={{ marginBottom: 4 }} />
      </Box>

      <CustomDialog2 open={dialogOpen} handleClose={() => setDialogOpen(false)} />
    </Paper>
  )
}

SignIn.displayName = 'SignIn'

export default withTexts(SignIn)
