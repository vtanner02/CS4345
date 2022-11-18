
import { useState } from 'react';
import { Formik, Form, FormikProvider } from 'formik';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { addPosting } from '../api/postings';
// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  FormControl
} from '@mui/material';

// component
export default function PostJobForm(params){
    const { userID } = useParams()
    return(
    <div>
      <h1>Submit a Job Posting!!!!</h1>
      <Formik
        initialValues={{ title: '',
        num: '',
        prof: '',
        desc: '',}}
        onSubmit={(values, actions) => {
            let body = {"title":values.title, "num":values.num, "prof": values.prof, "desc":values.desc, "u_id":userID};
            //window.alert(body["u_id"])
            addPosting(body)
            //window.alert(body);
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>
            <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Course Title"
              name="title"
              onChange={props.handleChange}
              value={props.values.name}
            />

            <TextField
              fullWidth
              label="Course Number"
              name="num"
              onChange={props.handleChange}
              value={props.values.num}
             />
          </Stack>
           {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <TextField
            fullWidth
            label="Description"
            name="desc"
            onChange={props.handleChange}
            value={props.values.name}
          />

          <TextField
            fullWidth
            label="Professor"
            name='prof'
            onChange={props.handleChange}
            value={props.values.name}
          />
        </Stack>
        <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
)};

// ----------------------------------------------------------------------
//const roles = [{name:'rancher', id:1}, {name:'helper', id:2},{name: 'farmer', id:3}];
 //navigate('/dashboard', { replace: true });

/* {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const age = "";

  const roles = ["rancher", "helper", "vet", "gen_user"];


  const formik = useFormik({
    initialValues: {
      title: '',
      num: '',
      prof: '',
      desc: '',
    },
    onSubmit: (values, actions) => {
        window.alert("Success")
      let body = [values.title, values.num, values.prof, values.desc];

      //[{'type': values.role},{'email':values.email}, {'password':values.password},{'first_name':values.firstName},  {'last_name':values.lastName}];
      navigate('/login', { replace: true });
    }
  });

  const { handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Course Title"
              {...getFieldProps('title')}
            />

            <TextField
              fullWidth
              label="Course Number"
              {...getFieldProps('num')}
             />
          </Stack>

          <TextField
            fullWidth
            label="Description"
            {...getFieldProps('desc')}
          />

          <TextField
            fullWidth
            label="Professor"
            {...getFieldProps('prof')}
          />
        </Stack>
      </Form>
      <button type="submit">Submit</button>
    </FormikProvider>
  );
}*/
