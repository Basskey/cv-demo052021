<template>
  <div class="wrapper">
    <h2>Username Details:</h2>
    <div class="fields-container">
      <div class="field">Name: {{ contacts[0].username }}</div>
      <div class="field">E-mail: {{  contacts[0].email }}</div>
      <div class="field" v-for="customField of contacts[0].customFields">
        {{customField.fieldName}}: {{customField.fieldValue}}
      </div>
      <form class="new-fields-form" @submit.prevent="onSubmit">
        <div>
          <label for="fieldname">Field name:</label>
          <input type="text" id="fieldname" v-model="fieldName">
        </div>
        <div>
          <label for="fieldvalue">Field value:</label>
          <input type="text" id="fieldvalue" v-model="fieldValue">
        </div>
        <button type="submit">Add field</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      contacts: {
        type: Array,
        required: true
      }
    },

    data() {
      return {
        fieldName: '',
        fieldValue: ''
      }
    },

    methods: {
      onSubmit() {
        if (this.fieldName.trim() && this.fieldValue.trim()) {
          const newField = {
            fieldName: this.fieldName,
            fieldValue: this.fieldValue
          }

          this.contacts[0].customFields.push(newField);

          this.fieldName='';
          this.fieldValue=''
        }
      },
    }
  }
</script>
