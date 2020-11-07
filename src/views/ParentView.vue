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
        width: 100%;
        justify-content: center;
        font-size:30px;
        
        background-color: #ddd;
    }
    form,
    .list{
        width:60%;
    }
    form input{
        margin: 10px 15px;
        font-size:30px;
        padding-left:20px;
        padding-top:0;
        padding-bottom:0;
    }

    .radio{
        margin-top:44px;
    }
</style>