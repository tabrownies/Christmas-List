<template>
    <div class="wrapper">
        <form>
            <input type="text" placeholder="Name" v-model="tempName">
            <input type="number" placeholder="Cost" v-model="tempCost">
            <input type="text" placeholder="Image URL (optional)" v-model="tempImage">
            <button @click.prevent="addItem">ADD</button>
        </form>
        <List class="list" :list="this.list" :remove="true" :removeMethod="removeItem"></List>
    </div>
</template>
<script>
    import List from '../components/List.vue'
    import Item from '../mock-data.js'
    export default {
        name: "MyList",
        components: {
            List
        },
        data: function(){
            return{
                tempName:'',
                tempCost:'',
                tempImage:''
            }
        },
        computed: {
            list: function(){
                return this.$root.$data.list.mock;
            }
        },
        methods:{
            addItem: function(){
                this.list.push({name:this.tempName,cost: this.tempCost, image:this.tempImage,rank:this.list.length+1});
                this.tempName=this.tempCost=this.tempImage = '';
            },
            resetRank(){
                for(let i = 0; i<this.list.length;++i){
                    this.list[i].rank = i+1;
                }
            },
            removeItem: function(index){
                this.list.splice(this.list.indexOf(index),1);
                this.resetRank();
            }
        }
    }
</script>
<style scoped>
    .wrapper{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: rgb(214, 214, 214);
        
    }
    .list,
    form{
        width:60%;
    }
    form input,
    form button{
        margin:10px 15px;
    }
    @media only screen and (max-width:1000px){
        .list,
        form{
            width:100%;
        }
    }
</style>