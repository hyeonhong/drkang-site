import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Formik, Form, useField } from 'formik'
import { TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as yup from 'yup'

import { useAuth } from 'utils/auth/firebaseClient'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    }
  },
  form: {
    textAlign: 'left',
    display: 'inline-block',
    width: '460px',
    padding: theme.spacing(4.5, 5)
  },
  textField: {
    width: '100%'
  }
}))

export default function SignUp() {
  const { user, signUp } = useAuth()
  const router = useRouter()

  const classes = useStyles()

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
    password: yup.string().required('Required'),
    confirmPassword: yup.string().required('Required')
  })

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user])

  return (
    <div className={classes.root}>
      <Typography variant="h4">Create a new account</Typography>
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
            <MyTextField required name="email" type="email" label="Email" />
            <MyTextField required name="password" type="password" label="Password" />
            <MyTextField required name="confirmPassword" type="password" label="Confirm Password" />
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
