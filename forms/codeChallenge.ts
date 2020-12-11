import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Code Challenge Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Hackerblocks Code Challenge ID',
            model: `${modelPrefix}hbContentId`,
            placeholder: 'Enter Hackerblocks Code Challenge ID',
            help: 'Enter Hackerblocks Code Challenge ID',
          },
        ]
      },
      ...extraGroups
    ]
  }
}
