<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in list">
                <h3>{{item.rank}}</h3>
                <img :src="item.image">
                <p>{{item.name}}</p>
                <p>${{item.cost}}</p>
                <button v-if="remove" @click.prevent="removeMethod(item)">X</button>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'List',
        props: {
            list: Array,
            remove: Boolean,
            removeMethod: Function
        }
    }
</script>
<style scoped>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul {
        width: 100%;
    }

    li {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        width: 100%;
        list-style: none;
        background-color: whitesmoke;
        border-bottom:3px solid #aaa;
    }
    li:first-of-type{
        border-top:3px solid #aaa;
    }
    li h3,
    li img,
    li p {
        padding: 5px;
    }

    li h3 {
        font-size: 60px;
        padding: 10px 30px;
    }

    li img {
        height: 120px;
        padding: 10px 30px;
    }

    li p {
        font-size: 40px;
        padding: 10px 30px;
    }

    li button {
        height: 40px;
        width: 50px;
        font-size: 25px;
        margin-left:auto;
    }

    @media only screen and (max-width:1000px) {

        li h3,
        li img,
        li p {
            padding: 5px;
        }

        li h3 {
            font-size: 35px;
            padding: 10px 50px;
        }

        li img {
            height: 100px;
            padding: 10px 50px;
        }

        li p {
            font-size: 30px;
            padding: 10px 45px;
        }

        li button {
            height: 20px;
            width: 25px;
            font-size: 15px;
        }
    }
</style>