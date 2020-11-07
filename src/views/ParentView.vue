<template>
    <div class="wrapper">
        <form>
            <input type="number" v-model="price" placeholder="Price">
            <p>Above</p><input class="radio" type="radio" value="above" v-model="comparison">
            <p>Below</p><input class="radio" type="radio" value="below" v-model="comparison">
        </form>
        <List class="list" :list="this.list"></List>
    </div>
</template>
<script>
    import List from '../components/List.vue'
    export default {
        name: "ParentView",
        components: {
            List
        },
        data: function () {
            return {
                price: '',
                comparison: 'above',
            }
        },
        computed: {
            list: function () {
                if (this.comparison === 'above') {

                    return this.$root.$data.list.mock.filter(item => item.cost >= this.price);
                } else {
                    return this.$root.$data.list.mock.filter(item => item.cost <= this.price);
                }

            }
        }
    }
</script>
<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
        background-color: #ddd;
    }
    form,
    .list{
        width:60%;
    }
    form input{
        box-sizing: border-box;
        margin:5px;
    }

    .radio{
        margin-top:18px;
    }
    @media only screen and (max-width:1000px){
        .list,
        form{
            width:100%;
        }
    }
</style>