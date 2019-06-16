<template>
    <div class="switchTop">
        <div class="switch">
            <span  v-for="(item,key) in tabs" :key="key"
             :class="{active:item.type===type}"
             @click="$emit('changetab',item.type)">{{item.name}}</span>
        </div>
        <div class="position">
            <span class="iconfont icon-gengduo-2"></span>
            <span class="iconfont icon-shouqi-01"></span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        type:String
    },
    data(){
        return {
            ind:0,
            tabs:[{
                name:'加班',
                type:'overtime'
            },{
                name:'休假',
                type:'vacation'
            }]
        }
    },
    methods: {
        
    }
    
}
</script>
<style lang="scss" scoped>
@import '../../../../static/_minix.scss';
@import '../../../../static/common.scss';
    .switchTop{
        position: relative;
        height: pxTorem(80px);
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        .switch{
            display: flex;
            font-size: pxTorem(14px);
            border:pxTorem(1px) solid rgb(9,98,65);
            border-radius: pxTorem(20px);
            overflow: hidden;
            span{
                padding:pxTorem(6px) pxTorem(40px);
                color: rgb(9,98,65);
            }
            .active{
                background: rgb(9,98,65);
                color: #fff;
            }
        }
        .position{
            position: absolute;
            right: pxTorem(20px);
            font-size: pxTorem(20px);
            top: pxTorem(30px);
            color: #999;
        }
    }
</style>
