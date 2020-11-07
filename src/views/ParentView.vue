<template>
    <div class="wrapper">
        <form>
            <input type="number" v-model="price" placeholder="price">
            Above <input type="radio" value="above" v-model="comparison">
            Below <input type="radio" value="below" v-model="comparison">
        </form>
        <List :list="this.list"></List>
    </div>
</template>
<script>
    import List from '../components/List.vue'
    export default {
        name: "ParentView",
        components: {
            List
        },
        data: function(){
            return{
                price: 0,   
                comparison: 'above',
            }
        },
        computed: {
            list: function(){
                if(this.comparison==='above'){
                    
                    return this.$root.$data.list.mock.filter(item=>item.cost>=this.price);
                }
                else{
                    return this.$root.$data.list.mock.filter(item=>item.cost<=this.price);
                }
                
            }
        }
    }
</script>