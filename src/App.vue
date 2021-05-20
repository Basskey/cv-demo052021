<template>
  <div id="app">
    <div class="layout">
      <h1 class="layout-header">CV-Demo #052021</h1>
      <router-view
          v-bind:contacts="contacts"
          @remove-item="removeItem"/>
    </div>
  </div>
</template>

<script>
import ContactList from '@/components/ContactList';
import ContactDetails from '@/components/ContactDetails';

export default {
  name: 'App',

  components: {
    ContactList,
    ContactDetails
  },

  methods: {
    removeItem(id) {
      this.contacts = this.contacts.filter(c => c.id !==id)
    }
  },

  data() {
    return {
      contacts: [
        {id: 1,username: 'John',email: 'john_connor@skynet.com',customFields: [{fieldName:'Custom kek',fieldValue:'Cheburek'},{fieldName:'Sasai',fieldValue:'Lalka'}]},
        {id: 2,username: 'Sarah',email: 'sarah_connor@mail.com',customFields: [{fieldName:'',fieldValue:''}]},
        {id: 3,username: 'Egor',email: 'egorletov@vseidetpoplanu.ru',customFields: [{fieldName:'',fieldValue:''}]}
      ]
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  div {
    border: 1px dashed;
    padding: 1px;
    margin: 1px;
  }

//<ContactList
//v-bind:contacts="contacts"
//@remove-item="removeItem"
///>
//<hr>
//<ContactDetails v-bind:person="contacts[0]" />
}
</style>
