<template>
    <div class='item' @click="$router.push({
        name:'detail',
        params:{
            type:item.list_type,
            id:item.applicationNumber
        }
    })">
        <div class="item_tel">
            <p>{{item.applicationNumber}}</p>
            <div>
                <span class="iconfont icon-xuanzhong-01"></span>
                <span>待审批</span>
            </div>
        </div>
        <div>
            <dl>
                <dt>申请人</dt>
                <dd>{{item.nickname}}</dd>
            </dl>
            <dl>
                <dt>加班类型</dt>
                <dd>{{item.describes}}</dd>
            </dl>
            <dl>
                <dt>加班日期</dt>
                <dd>{{new Date(item.create_at).toLocaleDateString()}}</dd>
            </dl>
            <dl>
                <dt>加班时数</dt>
                <dd>{{reducetime(item.startTime,item.endTime)}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        item:Object
    },
    data(){
        return {
            
        }
    },
    methods: {
        reducetime(start,end){
            let start_time=new Date(new Date(start).toGMTString())*1
            let end_time=new Date(new Date(end).toGMTString())*1
            let num = (end_time-start_time)/1000
            let day = parseInt(num/60/60/24) + parseFloat(num/60/60%24)
            return day
        },
        todetail(){
            console.log(this.item)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../../static/_minix.scss';
@import '../../../../static/common.scss';
    .item{
        padding:pxTorem(20px) pxTorem(15px);
        margin-bottom: pxTorem(10px);
        background: #fff;
        .item_tel{
            display: flex;
            justify-content: space-between;
            padding:pxTorem(5px) 0;
            color: rgb(179,179,179);
            .icon-xuanzhong-01{
                color: rgb(250,214,46);
                margin:0 pxTorem(5px);
            }
        }
        >div{
            display: flex;
            flex-wrap: wrap;
            dl{
                display: flex;
                width:50%;
                padding:pxTorem(5px) 0;
                dt,dd{
                    width:50%;
                }
                dt{
                    color: rgb(179,179,179);
                }
            }
        }
    }
</style>
