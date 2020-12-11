import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Zoom Webinar Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Zoom Webinar Title',
            model: `${modelPrefix}topic`,
            placeholder: 'Enter title for webinar',
            help: 'Give the title for webinar',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Zoom Webinar Description',
            model: `${modelPrefix}agenda`,
            placeholder: 'Enter desciption for webinar',
            help: 'Give the description for webinar',
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Duration',
            model: `${modelPrefix}duration`,
            placeholder: 'Enter duration for webinar',
            help: 'Give the duration for webinar',
          },
        ]
      },
      ...extraGroups
    ]
  }
}
