import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, useField } from 'formik'
import { makeStyles } from '@material-ui/core/styles'
import {
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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '460px',
    marginTop: theme.spacing(8)
  },
  textField: {
    width: '100%'
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
    dialogContent: null
  })

  const MyTextField = (props) => {
    const [field, meta] = useField(props)
    return (
      <>
        <TextField
          className={classes.textField}
          {...field}
          {...props}
          error={Boolean(meta.touched && meta.error)}
          helperText={meta.touched && meta.error ? meta.error : ' '} // one-length whitespace was used to retain height
          variant="outlined"
        />
      </>
    )
  }

  const validationSchema = yup.object({
    email: yup.string().required('Required').email('Invalid email format'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'Password must be at least 8 characters')
      .max(20, 'Password must be at most 20 characters'),
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
    //   'Password must contain at least 8 characters, one letter and one number'
    // ),
    confirmPassword: yup
      .string()
      .required('This field is required')
      .oneOf([yup.ref('password'), null], 'Passwords do not match')
  })

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4" align="center">
          {texts.signUp}
        </Typography>

        <Box sx={{ marginTop: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={states.termsChecked}
              color="primary"
              onChange={(e) => setStates({ ...states, termsChecked: e.target.checked })}
            />
            <Typography variant="body1" gutterBottom>
              {'(필수) 서비스 이용약관 동의'}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link
              href="javascript:void(0)"
              onClick={() => setStates({ ...states, dialogOpen: true, dialogContent: 'terms' })}
              color="inherit"
              underline="always"
              variant="body2"
              gutterBottom
            >
              {'보기'}
            </Link>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={states.privacyChecked}
              color="primary"
              onChange={(e) => setStates({ ...states, privacyChecked: e.target.checked })}
            />
            <Typography variant="body1" gutterBottom>
              {'(필수) 개인정보 수집 및 이용 동의'}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link
              href="javascript:void(0)"
              onClick={() => setStates({ ...states, dialogOpen: true, dialogContent: 'privacy' })}
              color="inherit"
              underline="always"
              variant="body2"
              gutterBottom
            >
              {'보기'}
            </Link>
          </Box>
        </Box>

        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
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
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>

        <CustomDialog
          open={states.dialogOpen}
          handleClose={() => setStates({ ...states, dialogOpen: false })}
          content={states.dialogContent}
        />
      </div>
    </div>
  )
}

SignUp.displayName = 'SignUp'

export default withTexts(SignUp)
