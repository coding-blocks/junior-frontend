import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Lecture Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Lecture Name',
            model: 'title',
            placeholder: 'Enter lecture name',
            help: 'This will be the title for the lecture',
            required: true,
            validators: ['string', 'required'],
          },
          {
            type: 'radios',
            label: 'Type of the lecture',
            model: 'type',
            values: [
              { name: 'Zoom Webinar', value: 'zoom' },
              { name: 'YT Live', value: 'youtube' },
            ],
          },
        ],
      },
      ...extraGroups
    ],
  }
}
