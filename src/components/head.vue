<template>
    <div class="header">
        <dl v-for="item in tabList" :key="item.index"
         :class="item.index===index ? 'tabColor' :''"
         
         @click="$emit('tablist',item.index)">
            <dt :class=" 'iconfont ' + item.icon"></dt>
            <dd>{{item.title}}</dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:{
        index:Number
    },
    data(){
        return {
            tabList:[{
                index:0,
                title:'待处理',
                icon:'icon-naozhong'
            },{
                index:1,
                title:'已发起',
                icon:'icon-07'
            },{
                index:2,
                title:'已处理',
                icon:'icon-yibangding'
            }],
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/_minix.scss';
@import '../../static/common.scss';
    .header{
        display: flex;
        justify-content: space-around;
        color: #999;
        margin-bottom: pxTorem(20px);
        box-shadow: 0 pxTorem(8px) pxTorem(10px) #ccc;
        dl{
            text-align: center;
            margin:pxTorem(10px);
            
            dt{
                font-size: pxTorem(20px);
            }
            dd{
                font-size: pxTorem(14px);
            }
        }
        .tabColor{
            color: rgb(9,98,65);
        }
    }
</style>
