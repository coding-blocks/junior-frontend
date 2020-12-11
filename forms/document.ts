import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Pdf Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Pdf Name',
            model: `${modelPrefix}pdf_link`,
            placeholder: 'Enter PDF url',
            help: 'Give the pdf url',
          },
        ]
      },
      ...extraGroups
    ]
  }
}
