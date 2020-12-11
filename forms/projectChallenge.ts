import { FormSchemaOpts } from "./forms"

export default (opts: FormSchemaOpts = {}) => {
  const { extraGroups = [], modelPrefix = '' } = opts

  return {
    groups: [
      {
        legend: 'Project Challenge Details',
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Hackerblocks Project Challenge ID',
            model: `${modelPrefix}hbContentId`,
            placeholder: 'Enter Hackerblocks Project Challenge ID',
            help: 'Enter Hackerblocks Project Challenge ID',
          },
        ]
      },
      ...extraGroups
    ]
  }
}
