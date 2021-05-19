<template>
  <li class="contact-list__item">
    <span>{{ person.username }}</span>
    <div class="controls-container">
      <button>View</button>
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
      }
    },
  }
</script>
