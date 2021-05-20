<template>
  <form class="new-contact-form" @submit.prevent="onSubmit">
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
    </div>
    <div>
      <label for="email">E-mail:</label>
      <input type="email" id="email" v-model="email">
    </div>
    <button type="submit">Add contact</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        email: ''
      }
    },

    methods: {
      onSubmit() {

        if (this.username.trim() && this.email.trim()) {
          const newContact = {
            id: Date.now(),
            username: this.username,
            email: this.email
          }

          this.$emit('add-contact', newContact)

          this.username='';
          this.email='';
        }
      }
    }
  }
</script>

<style lang="scss">
  .new-contact-form {
    display: flex;
    flex-direction: column;
    top: 0;
    margin: 1px;
    padding: 1px;
    border: 1px dotted;
  }
</style>
