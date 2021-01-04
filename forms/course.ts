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
            type: 'switch',
            label: 'Listed?',
            model: 'isListed',
            help: 'Enabling will make this course visible to users',
          },
          {
            type: 'FileUploader',
            label: 'Logo',
            model: 'logo',
          },
          {
            type: 'FileUploader',
            label: 'Thumbnail',
            model: 'thumbnail',
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
            type: "ColorSelector",
            label: "Course Background Theme",
            model: "backgroundTheme",
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
          },
          {
            type: 'radios',
            label: 'Type of the class',
            model: 'classTag',
            values: [
              '1-3', '4-6', '7-9', '10-12'
          ]
          },
          {
            type: 'checkbox',
            label: 'Course Recommended',
            model: 'isRecommended',
            default: false,
            help: 'Course will be displayed on recommended section if checked',
          },
          {
            type: 'SearchSelect',
            label: 'Tags',
            model: 'tags',
          },
        ],
      },
      ...extraGroups
    ],
  }
}
