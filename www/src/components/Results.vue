<template>
    <div class='results'>
        <div>
            <h4 class="m-3">{{title}}</h4>
            <div class="row">
                <ol class="col-sm-6">
                    <li v-for="movie in movies">
                        <p @click="showDetails(movie)" class="point">&nbsp;&nbsp;{{movie.title}}</p>
                    </li>
                </ol>
                <detailz class="col-sm-6" :movie="activeMovie" :title="title"></detailz>
            </div>
        </div>
    </div>
</template>

<script>
    import Details from './Details'
    export default {
        name: 'results',
        data() {
            return {
            }
        },
        computed: {
            movies() {
                return this.$store.state.searchResults
            },
            activeMovie() {
                return this.$store.state.activeMovie
            }
        },
        methods: {
            showDetails(movie) {
                this.$store.dispatch('setActiveMovie', movie)
            }
        },
        components: {
            detailz: Details
        },
        props: ['title']
    }
</script>

<style scoped>
    .results {
        background-color: black;
        color: white;
        height: 100vh
    }

    .point {
        cursor: pointer;
    }

    .point:hover {
        background-color: rgb(136, 136, 136);
        border-radius: 10px;
        transition: all .3s linear
    }

    li {
        margin: 5px;
        margin-left: 15px
    }
</style>