export default {
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
          validators: ['string', 'required']

        },
        {
          type: "radios",
          label: "Type of the resource",
          model: "type",
          values: [
            { name: "YT Video", value:"video" },
            { name: "Quiz", value:"quiz" },
            { name: "PDF", value:"pdf" },
            { name: "HB Content", value:"hb_content" }
          ]
        }
      ],
    },
    {
      legend: 'Video Details',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Resource Name',
          model: 'video.url',
          placeholder: 'Enter video url',
          help: 'Give the video url from youtube',
          visible: (model) => { 
            if(model.type === 'video') { return true; } 
            return false; 
        }
        },

      ]
    },
    {
      legend: 'Pdf Details',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Pdf Name',
          model: 'pdf.url',
          placeholder: 'Enter PDF url',
          help: 'Give the pdf url',
          visible: (model) => { 
            if(model.type === 'pdf') { return true; } 
            return false; 
        }
        },

      ]
    }
    
  ],
}