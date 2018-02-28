<template>
    <div class="hello container-fluid">
      <div class="row text-center">
        <form class="col-sm-12 m-3" @submit.prevent='movieSearch'>
          <input type="text" v-model="title" placeholder="Movie Title">
          <button type="submit" class="btn">Search</button>
        </form>
      </div>
      <div class="row">
        <!--search results col-sm-6-->
        <results class="col-sm-12" :title="title"></results>
        <!--details col-sm-6-->
      </div>
    </div>
  </template>

<script>
  import Results from './Results'
  import Details from './Details'
  export default {
    name: 'Home',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      movieSearch() {
        console.log(1)
        this.$store.dispatch('getMovies', this.title)
      }
    },
    components:{
      Results,
      deets: Details
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    text-align: left
  }
  .form-control{
    width: 150px
  }
  button{
    font-weight: 700
  }
</style>