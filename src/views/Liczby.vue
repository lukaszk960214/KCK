<template>
  <v-container fluid class="text-xs-center">
    <v-btn outline round color="green" class="hidden-md-and-down" @click="changeNumber()">Losuj</v-btn>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        randnum: null
      }
    },
    methods: {
      changeNumber: function() {
        this.randnum = Math.floor(Math.random() * 101)
      }
    },
    watch: {
      randnum: function(newValue, oldValue) {
        console.log("Poprzednia " + oldValue, "Aktualna " + newValue)
      }
    }
  }
    
</script>