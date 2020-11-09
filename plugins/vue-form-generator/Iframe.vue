<template>
    <iframe
        src="value"
        :disabled="disabled"
        :placeholder="schema.placeholder"
        :readonly="schema.readonly" ></iframe>
</template>

<script>
   import { abstractField } from "vue-form-generator";

   export default {
         mixins: [ abstractField ]
   };
</script>