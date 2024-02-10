import React from 'react';
import { TextField, Select, MenuItem, FormControl, FormGroup, InputLabel, FormControlLabel, Checkbox, Button, FormLabel, Typography } from '@mui/material';
import { useFormik } from 'formik';
import './FormComponent.css';

const mainTechList = ['JavaScript', 'React', 'TypeScript', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'Sequelize', 'Swagger', 'PostgreSQL'];
const additionalTechList = ['Vue.js', 'Redux', 'Redux Toolkit', 'Tailwind CSS', 'Strapi', 'GraphQL', 'REST API', 'Docker', 'GSAP'];


export const FormComponent = ({ formData, onFormDataChange }) => {
  const formik = useFormik({
    initialValues: formData,
    onSubmit: values => {
      onFormDataChange(values);
    }
  });

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    
    const updatedTechs = checked
    ? [...formik.values[name], value]
    : formik.values[name].filter((tech) => tech !== value);

    formik.setFieldValue(name, updatedTechs);
  };

  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='grid'>
        <TextField
          label="Company Name"
          name="companyName"
          size="small"
          value={formik.values.companyName}
          onChange={formik.handleChange}
        />

        <TextField
          label="Recruiter Name"
          name="recruiterName"
          size="small"
          value={formik.values.recruiterName}
          onChange={formik.handleChange}
        />

        <TextField
          label="Vacancy Title"
          name="vacancyTitle"
          size="small"
          value={formik.values.vacancyTitle}
          onChange={formik.handleChange}
        />
      </div>

      <div className='grid'>
        <FormControl size="small">
          <InputLabel id="introduce-label">How to introduce?</InputLabel>
          <Select
            labelId="introduce-label"
            name="introduce"
            label="How to introduce?"
            value={formik.values.introduce}
            onChange={formik.handleChange}
          >
            <MenuItem value="Front End">Front End</MenuItem>
            <MenuItem value="Back End">Front End</MenuItem>
            <MenuItem value="Full Stack">Full Stack</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small">
          <InputLabel id="platform-label">Platform</InputLabel>
          <Select
            labelId="platform-label"
            name="platform"
            label="Platform"
            value={formik.values.platform}
            onChange={formik.handleChange}
          >
            <MenuItem value="Work.ua">Work.ua</MenuItem>
            <MenuItem value="Robota.ua">Robota.ua</MenuItem>
            <MenuItem value="DUO">DUO</MenuItem>
            <MenuItem value="djinni">djinni</MenuItem>
            <MenuItem value="other">other</MenuItem>
          </Select>
        </FormControl>

        {formik.values.platform === 'other' && (
          <TextField
            label="Other Platform"
            name="otherPlatform"
            size="small"
            value={formik.values.otherPlatform}
            onChange={formik.handleChange}
          />
        )}
      </div>

      <div className='formControl'>
        <FormLabel component="legend">Main Technology stack:</FormLabel>

        <FormGroup className='checkbox-grid'>
          {mainTechList.map((tech) => (
            <FormControlLabel
              control={
                <Checkbox
                  name="mainTech"
                  value={tech}
                  checked={formik.values.mainTech.includes(tech)}
                  onChange={handleCheckboxChange}
                />
              }
              label={tech}
              key={tech}
            />
          ))}
        </FormGroup>

        <FormLabel component="legend">Additional Technology stack:</FormLabel>

        <FormGroup className='checkbox-grid'>
          {additionalTechList.map((tech) => (
            <FormControlLabel
              control={
                <Checkbox
                  name="additionalTech"
                  value={tech}
                  checked={formik.values.additionalTech.includes(tech)}
                  onChange={handleCheckboxChange}
                />
              }
              label={tech}
              key={tech}
            />
          ))}
        </FormGroup>

        <TextField
          label="Other Technologies"
          name="otherTech"
          size="small"
          value={formik.values.otherTech}
          onChange={formik.handleChange}
          className='extra-technologies'
          multiline
        />

        <Typography className="comment" variant="caption">*comma-separated list</Typography>
      </div>

      <Button 
        className='button' 
        type="submit" 
        variant="contained"
      >
        Done!
      </Button>
    </form>
  )
}