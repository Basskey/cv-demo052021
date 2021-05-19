<template>
  <div class="wrapper">
    <NewContactForm
        @add-contact="addContact"
    />

    <h2 class="title">Contact List</h2>
    <button v-on:click="initAddForm()">Add new</button>

    <ul class="contact-list">
      <ContactListItem
        v-for="person of contacts"
        v-bind:person="person"
        v-on:remove-item="removeItem"
      />
    </ul>

  </div>
</template>

<script>
  import ContactListItem from '@/components/ContactListItem';
  import NewContactForm from '@/components/NewContactForm'

  export default {
    props: ['contacts'],
    components: {
      ContactListItem,
      NewContactForm
    },

    methods: {
      initAddForm(){

      },

      addContact(contact) {
        this.contacts.push(contact)
      },

      removeItem(id) {
        this.$emit('remove-item', id)
      }
    }
  }
</script>

<style lang="scss">
  .contact-list {
    padding-left: 25px;

    &__item {
      text-align: left;
      border: 1px dotted #2c3e50;
      margin: 1px;
      padding: 5px 1px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    };
  };
</style>
