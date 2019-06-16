<template>
    <div class="mask" v-show="flag" @click="$emit('show',flag)">
        <div>
            <dl v-for="item in masks" :key="item.index" @click="$router.push({
                name:'application',
                params:{
                    type:item.type
                }
            })">
                <dt :class="'iconfont ' + item.icon"></dt>
                <dd>{{item.name}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        flag:Boolean
    },
    data(){
        return {
            
        }
    },
    data(){
        return {
            masks:[{
                name:'加班',
                icon:'icon-shouji',
                index:0,
                type:'overtime'
            },{
                name:'休假',
                icon:'icon-08',
                index:1,
                type:'vacation'
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../../static/_minix.scss';
@import '../../../../static/common.scss';
    .mask{
        width:100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        position: fixed;
        top:0;
        left:0;
        >div{
            position: absolute;
            bottom: 0;
            width:100%;
            height: 20%;
            background: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
            dl{
                text-align: center;
                    font-size: pxTorem(16px);
                dt{
                    font-size: pxTorem(22px);
                    background: orange;
                    width:pxTorem(40px);
                    height: pxTorem(40px);
                    text-align: center;
                    line-height: pxTorem(40px);
                    border-radius: 50%;
                    color: #fff;
                    margin-bottom: pxTorem(10px);
                }
            }
        }
    }
</style>
