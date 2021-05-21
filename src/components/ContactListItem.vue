<template>
  <li class="contact-list__item">
    <span>{{ person.username }}</span>
    <div class="controls-container">
      <button><router-link :to="linkPath">View</router-link></button>
      <button v-on:click="$emit('remove-item', person.id)">&times</button>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      person: {
        type: Object,
        required: true
      },
    },

    data() {
      return {
        linkPath: '/contact-details' + this.person.id
      }
    }
  }
</script>
