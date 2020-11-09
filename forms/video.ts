import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Video Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Resource Name',
            model: `${modelPrefix}url`,
            placeholder: 'Enter video url',
            help: 'Give the video url from youtube'
          },
        ]
      },
      ...extraGroups
    ]
  }
}
