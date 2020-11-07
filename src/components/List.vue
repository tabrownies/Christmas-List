<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in list">
                <h3>{{item.rank}}</h3>
                <img :src="item.image">
                <p>{{item.name}}</p>
                <p>{{item.cost}}</p>
                <button v-if="remove" @click.prevent="removeMethod(item)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'List',
        props:{
            list: Array,
            remove:Boolean,
            removeMethod: Function
        }
    }
</script>
<style scoped>
    li{
        display:flex;
        align-items:center;
        padding:10px;
        list-style: none;   
    }
    li h3,
    li img,
    li p{
        padding:5px;
    }
</style>