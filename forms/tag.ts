import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Tag title',
            model: 'title',
            placeholder: 'Enter tag title',
            required: true,
            validators: ['string', 'required']
  
          },
        ],
      },
      ...extraGroups
    ],
  }
}
