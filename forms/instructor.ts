import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Instructor Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Instructor Name',
            model: 'name',
            placeholder: 'Enter instructor name',
            required: true,
            validators: ['string', 'required']
  
          },
          {
            type: 'FileUploader',
            label: 'Instructor Image',
            model: 'image',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Contact Email',
            model: 'email',
            placeholder: 'Enter email',
            validators: ['string']
          },
          {
            type: 'textArea',
            inputType: 'text',
            label: 'Instructor description',
            model: 'description',
            placeholder: 'Enter instructor bio',
            required: true,
            validators: ['string', 'required']
          },
        ],
      },
      ...extraGroups
    ],
  }
}
