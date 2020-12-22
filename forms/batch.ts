import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Batch Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Batch Name',
            model: 'title',
            placeholder: 'Enter batch name',
            help: 'This will be the title for the batch',
            required: true,
            validators: ['string', 'required'],
          },
          {
            type: 'radios',
            label: 'Type of the batch',
            model: 'type',
            values: [
              { name: 'Free', value: 'free' },
              { name: 'Paid', value: 'paid' },
            ],
            disabled: function(model) {
              return model.id;
            }
          },
          {
            type: "DatePicker",
            label: "Start Time",
            model: 'start',
          },
          {
            type: "DatePicker",
            label: "End time",
            model: 'end',
          },
          {
            type: "DatePicker",
            label: "Enrollment start time",
            model: 'registrationStart',
          },
          {
            type: "DatePicker",
            label: "Enrollment end time",
            model: 'registrationEnd',
          },
          {
            type: 'input',
            inputType: 'number',
            label: 'Batch Size',
            model: 'maxSize',
            placeholder: 'Enter batch size',
            help: 'Give the maximum size for this batchj',
          },
        ],
      },
      ...extraGroups
    ],
  }
}
