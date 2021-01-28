import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, useField } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Snackbar,
  Alert,
  Box,
  Checkbox,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Button,
  Typography
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import * as yup from 'yup'

import { useAuth } from 'utils/auth/firebaseClient'
import withTexts from 'utils/hoc/withTexts'
import CustomDialog from 'components/CustomDialog'
import SignInButtons from 'components/SignInButtons'

const useStyles = makeStyles((theme) => ({
  form: {
    width: '460px',
    marginTop: theme.spacing(8)
  },
  textField: {
    width: '100%'
  },
  button: {
    textTransform: 'none'
  }
}))

const SignUp = ({ texts }) => {
  const { user, signUp } = useAuth()
  const router = useRouter()
  const classes = useStyles()
  const [states, setStates] = useState({
    termsChecked: false,
    privacyChecked: false,
    showPassword: false,
    showConfirmPassword: false,
    dialogOpen: false,
    dialogContent: null,
    snackbarOpen: false
  })

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setStates({ ...states, snackbarOpen: false })
  }

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
    password: yup
      .string()
      .required(texts.passwordRequired)
      .min(8, texts.passwordMinLength)
      .max(20, texts.passwordMaxLength),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
    //   'Password must contain at least 8 characters, one letter and one number'
    // ),
    confirmPassword: yup
      .string()
      .required(texts.confirmPasswordRequired)
      .oneOf([yup.ref('password'), null], texts.confirmPasswordNotMatched)
  })

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={states.snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {texts.snackbarError}
        </Alert>
      </Snackbar>

      <Typography variant="h4" align="center">
        {texts.signUp}
      </Typography>

      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (!states.termsChecked || !states.privacyChecked) {
            setStates({ ...states, snackbarOpen: true })
            setSubmitting(false)
            return
          }

          signUp(values.email, values.password)
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
            <MyTextField required name="email" type="email" label={texts.email} />
            <MyTextField
              required
              name="password"
              autoComplete="off"
              type={states.showPassword ? 'text' : 'password'}
              label={texts.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setStates({ ...states, showPassword: !states.showPassword })}
                      edge="end"
                    >
                      {states.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <MyTextField
              required
              name="confirmPassword"
              autoComplete="off"
              type={states.showConfirmPassword ? 'text' : 'password'}
              label={texts.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setStates({ ...states, showConfirmPassword: !states.showConfirmPassword })
                      }
                      edge="end"
                    >
                      {states.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Box sx={{ marginTop: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={states.termsChecked}
                  color="primary"
                  onChange={(e) => setStates({ ...states, termsChecked: e.target.checked })}
                />
                <Typography variant="body1" gutterBottom>
                  {texts.termsAgreement}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Link
                  href="#"
                  onClick={() => setStates({ ...states, dialogOpen: true, dialogContent: 'terms' })}
                  color="inherit"
                  underline="always"
                  variant="body2"
                  gutterBottom
                >
                  {texts.viewDetails}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={states.privacyChecked}
                  color="primary"
                  onChange={(e) => setStates({ ...states, privacyChecked: e.target.checked })}
                />
                <Typography variant="body1" gutterBottom>
                  {texts.privacyAgreement}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Link
                  href="#"
                  onClick={() =>
                    setStates({ ...states, dialogOpen: true, dialogContent: 'privacy' })
                  }
                  color="inherit"
                  underline="always"
                  variant="body2"
                  gutterBottom
                >
                  {texts.viewDetails}
                </Link>
              </Box>
            </Box>

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              className={classes.button}
              fullWidth
              sx={{ marginTop: 4 }}
            >
              <Typography variant="body1" sx={{ padding: '3px', fontWeight: 'bold' }}>
                {texts.join}
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>

      <Box sx={{ marginTop: 4, marginBottom: 4 }}>
        <SignInButtons />
      </Box>

      <CustomDialog
        open={states.dialogOpen}
        handleClose={() => setStates({ ...states, dialogOpen: false })}
        content={states.dialogContent}
      />
    </Paper>
  )
}

SignUp.displayName = 'SignUp'

export default withTexts(SignUp)
