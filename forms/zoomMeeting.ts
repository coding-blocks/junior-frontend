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
            model: `${modelPrefix}title`,
            placeholder: 'Enter title for webinar',
            help: 'Give the title for webinar',
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Zoom Webinar Description',
            model: `${modelPrefix}description`,
            placeholder: 'Enter desciption for webinar',
            help: 'Give the description for webinar',
          },
          {
            type: "DTPicker",
            label: "Start Time",
            model: `${modelPrefix}start_time`,
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
