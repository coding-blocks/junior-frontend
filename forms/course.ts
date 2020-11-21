import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Course Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Course Name',
            model: 'title',
            placeholder: 'Enter course name',
            help: 'This will be the title for the course',
            required: true,
            validators: ['string', 'required']
  
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Course Subtitle',
            model: 'subTitle',
            placeholder: 'Enter course name',
            help: 'This will be the title for the course',
            required: true,
            validators: ['string', 'required']
          },
          {
            type: 'textArea',
            inputType: 'text',
            label: 'Course description',
            model: 'description',
            placeholder: 'Enter course name',
            help: 'This will be the summary for the course',
            required: true,
            validators: ['string', 'required']
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Slug',
            model: 'slug',
            help: `This will be the <a href="https://stackoverflow.com/questions/19335215/what-is-a-slug"> slug </a> for the course.
              Use kebab-case (hyphen separated) name and avoid special characters if you can) For example: c++-for-beginners`,
            placeholder: 'This will be the slug for the course',
            required: true,
            validators: ['validSlug', 'required']
          },
          {
            type: 'textArea',
            inputType: 'text',
            label: 'Course Syallabus',
            model: 'syllabus',
            placeholder: 'Enter course syllabus json',
            help: 'This will be the syllabus for the course',
            required: true,
            validators: ['string', 'required']
          }
        ],
      },
      ...extraGroups
    ],
  }
}
