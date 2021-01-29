import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, useField } from 'formik'
import { Paper, TextField, Button, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as yup from 'yup'

import { useAuth } from 'utils/auth/firebaseClient'
import withTexts from 'utils/hoc/withTexts'
import SignInButtons from 'components/SignInButtons'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '460px',
    padding: theme.spacing(4.5, 5)
  },
  textField: {
    width: '100%'
  }
}))

const SignIn = ({ texts }) => {
  const { user, signIn } = useAuth()
  const router = useRouter()

  const classes = useStyles()

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
    email: yup.string().required('Required').email('Invalid email format'),
    password: yup.string().required('This field is required')
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
            <MyTextField required name="email" type="email" label="Email" />
            <MyTextField required name="password" type="password" label="Password" />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              fullWidth
              sx={{ marginTop: 4 }}
            >
              <Typography variant="body1" sx={{ padding: '3px', fontWeight: 'bold' }}>
                {'Submit'}
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>

      <Box sx={{ marginTop: 8, marginBottom: 4 }}>
        <SignInButtons />
      </Box>
    </Paper>
  )
}

SignIn.displayName = 'SignIn'

export default withTexts(SignIn)
