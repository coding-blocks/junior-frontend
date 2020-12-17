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
            type: 'input',
            inputType: 'text',
            label: 'Thumbnaik',
            model: 'thumbnail',
            placeholder: 'Enter Thumbnail URL',
            help: 'This will be the thumbnail for the lecture',
            required: true,
            validators: ['string', 'required'],
          },
          {
            type: "DTPicker",
            label: "Start Time",
            model: "start_time",
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
