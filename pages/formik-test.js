import { Formik, Form, useField } from 'formik'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as yup from 'yup'

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

export default function FormikTest(props) {
  const classes = useStyles()

  const MyTextField = (props) => {
    const [field, meta] = useField(props)
    return (
      <>
        <TextField
          className={classes.textField}
          {...field}
          {...props}
          error={meta.touched && meta.error}
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

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form className={classes.form}>
            <MyTextField required name="email" type="email" label="Email" />
            <MyTextField required name="password" type="password" label="Password" />
            <MyTextField required name="confirmPassword" type="password" label="Confirm password" />
            <Button disabled={isSubmitting} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
