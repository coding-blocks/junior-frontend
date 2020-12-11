import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Resource Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Resource Name',
            model: 'title',
            placeholder: 'Enter resource name',
            help: 'This will be the title for the resource',
            required: true,
            validators: ['string', 'required'],
          },
          {
            type: 'radios',
            label: 'Type of the resource',
            model: 'type',
            values: [
              { name: 'YT Video', value: 'video' },
              { name: 'Quiz', value: 'quiz' },
              { name: 'PDF', value: 'document' },
              { name: 'Code Challenge', value: 'code-challenge' },
              { name: 'Project Challenge', value: 'project-challenge' },
            ],
            disabled: function(model) {
              return model.id;
            }
          },
        ],
      },
      ...extraGroups
    ],
  }
}
