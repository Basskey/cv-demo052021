<template>
  <div class="wrapper">
    <h2 class="title">Contact List</h2>
    <button v-on:click="addItem()">Add new</button>

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
  import ContactListItem from '@/components/ContactListItem'

  export default {
    props: ['contacts'],
    components: {
      ContactListItem
    },

    methods: {
      addItem(){
        let funnyPeople = [{id: 4, username: 'Donald Duck', eMail: 'puckyou@mail.duck'}]
        funnyPeople.forEach(name => {
          this.contacts.push(name);
        });
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
