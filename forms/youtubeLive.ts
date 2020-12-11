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
            label: 'Video Youtube ID',
            model: `${modelPrefix}video_id`,
            placeholder: 'Enter video id',
            help: 'Give the video id from youtube'
          },
        ]
      },
      ...extraGroups
    ]
  }
}
