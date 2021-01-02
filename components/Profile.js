import { Formik, Form, Field } from 'formik'
import {
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Autocomplete
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  // root: {
  //   minHeight: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',

  //   '& .MuiTextField-root': {
  //     margin: theme.spacing(1)
  //   }
  // },
  main: {
    textAlign: 'center'
    // width: '460px'
    // padding: theme.spacing(4.5, 5)
  },
  form: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column'
    // width: '460px',
    // padding: theme.spacing(4.5, 5)
  }
}))

export default function Profile() {
  const classes = useStyles()

  // const validationSchema = yup.object({
  //   firstName: yup.string().required('Required').email('Invalid email format'),
  //   lastName: yup.string().required('Required')
  // })

  const currentYear = new Date().getFullYear()
  const birthYears = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString())

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', gender: '', birthYear: '' }}
      // validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue
      }) => (
        <Form className={classes.form}>
          <div>
            <Field name="firstName">
              {({ field }) => (
                <TextField {...field} required label="First Name" variant="outlined" />
              )}
            </Field>
            <Field name="lastName">
              {({ field }) => (
                <TextField {...field} required label="Last Name" variant="outlined" />
              )}
            </Field>
          </div>
          <RadioGroup row>
            <Field name="gender">
              {({ field }) => (
                <FormControlLabel {...field} value="male" control={<Radio />} label="Male" />
              )}
            </Field>
            <Field name="gender">
              {({ field }) => (
                <FormControlLabel {...field} value="female" control={<Radio />} label="Female" />
              )}
            </Field>
            <Field name="gender">
              {({ field }) => (
                <FormControlLabel {...field} value="other" control={<Radio />} label="Other" />
              )}
            </Field>
          </RadioGroup>

          <Autocomplete
            disablePortal
            options={birthYears}
            onChange={(e, value) => setFieldValue('birthYears', value)}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Birth Year" />}
          />

          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  )
}
