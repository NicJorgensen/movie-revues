<template>
    <div class='details'>
        <div class="text-center" v-if="movie.title">
            <div v-if="movie.backdrop_path">
                <img :src="'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path" class="head m-3">
            </div>
           <h4>{{movie.title}}</h4>
        </div>
        <div v-if="movie.poster_path" class="inline">
            <img :src="'https://image.tmdb.org/t/p/w500'+ movie.poster_path" class="poster m-3">
            <p class="m-3">{{movie.overview}}</p>
        </div>
        <div v-if="movie.title" class="d-flex justify-content-end">
            <button class="btn">Add to List</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'details',
        props: ['movie', 'title']
    }

</script>

<style scoped>
    .poster {
        max-height: 200px;
    }

    .head {
        width: 500px
    }

    .inline {
        display: flex;
        flex-direction: row;
        align-items: center
    }

    .btn {
        margin-right: 100px
    }
</style>