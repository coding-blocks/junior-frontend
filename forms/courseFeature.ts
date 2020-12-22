import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Course Feature',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Feature title',
            model: 'title',
            placeholder: 'Enter feature title',
            help: 'This will be the title for the feature',
            required: true,
            validators: ['string', 'required']
  
          },
          {
            type: 'FileUploader',
            label: 'Logo',
            model: 'logo',
          },
        ],
      },
      ...extraGroups
    ],
  }
}
