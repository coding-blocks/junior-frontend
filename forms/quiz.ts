import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Quiz Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Hackerblocks Quiz ID',
            model: `${modelPrefix}hbContentId`,
            placeholder: 'Enter Hackerblocks QuizId',
            help: 'Enter Hackerblocks QuizId',
          },
        ]
      },
      ...extraGroups
    ]
  }
}
