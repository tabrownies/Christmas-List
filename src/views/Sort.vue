<template>
    <div class="wrapper">
        <ul>
            <div class="explaination">
                DRAG TO RE-SORT
            </div>
            <li>
                <h3>Rank</h3><h3>Name</h3>
            </li>
            <li v-for="item in list" draggable="true" @dragstart="dragItem(item)" @dragover.prevent @drop="dropItem(item)">
                <p>#{{item.rank}}</p><p>{{item.name}}</p>
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
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    div{
        
    }
    .explaination{
        font-size:30px;
        padding:10px;
        background-color: #ddd;
        width:100%;
        text-align: center;
    }
    ul{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
    ul li{
        display: flex;
        align-items: center;
        justify-content: center;
        width:50%;
        padding: 10px;
        border:2px solid #991f00;
        background-color: #39ac39;
        border-radius: 4px;
        margin:5px;
    }
    ul li:first-of-type{
        border:none;
        background-color: initial;
    }
    ul li h3{
        font-size:45px;
        padding:5px 50px;
        width:50%;
        text-align:center;
    }
    ul li p{
        font-size:35px;
        padding:5px 50px;
        width:50%;
        text-align:center;
    }
</style>