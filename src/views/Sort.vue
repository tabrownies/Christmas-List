<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in list" draggable="true" @dragstart="dragItem(item)" @dragover.prevent @drop="dropItem(item)">
                <h3>{{item.rank}}</h3><p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "Sort",
        data: function(){
            return{
                drag: {},
            }
        },
        computed: {
            list: function () {
                return this.$root.$data.list.mock;
            }
        },
        methods:{
            resetRanks: function(){
                for(let i = 0; i < this.list.length; ++i){
                    this.list[i].rank = i+1;
                }
            },
            dragItem: function(item){
                this.drag = item;
            },
            dropItem(item){
                const indexItem=this.list.indexOf(this.drag);
                const indexTarget = this.list.indexOf(item);
                console.log(indexItem,indexTarget)
                this.list.splice(indexItem,1);
                this.list.splice(indexTarget,0,this.drag);
                this.resetRanks();
            }
        }
    }
</script>
<style scoped>
    ul li{
        display: flex;
        align-items: center;
    }
    ul li h3,
    ul li p{
        padding:10px 5px;
    }
</style>