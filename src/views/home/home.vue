<template>
    <div class="home">
        <header class="head">
            <span class='iconfont icon-arrow-left'></span>
            <div>加班/休假</div>
            <span class='iconfont icon-riqixuanze'></span>
            <span class='iconfont icon-fangdajing'></span>
        </header>

        <Header @tablist="tablist" :index="tabTaskList.status"/>
        
        <section class="section">
            <SwitchTop :type="tabTaskList.type" @changetab="changeTab"/>

            <div class="list">
                <Item
                 v-for="(item,key) in itemList" :key="key" 
                 :item="item" 
                />
            </div>
            
        </section>
        <div class="add" @click="flag=true">+发起任务</div>
        <Masks :flag="flag" @show="flag=false"/>
    </div>
</template>
<script>
import Header from '../../components/head'
import SwitchTop from './switchTop/switch'
import Item from './item/item'
import Masks from './mask/mask'
import api from '@/api'
export default {
    components:{
        Header,SwitchTop,Item,
        Masks
    },
    data(){
        return {
            index:0,
            flag:false,
            tabTaskList:{
                page:1, //页码 | 是
                pageSize:10 ,//| number | 条数 | 是
                create_at:0, //| number | 不知道 | 是
                type:'overtime', //| string（overtime加班）（vacation休假） | 判断加班还是休假 | 是
                status:0, //| number （0待处理） 1（已发起） 2（已处理） | 是 
            },
            type:'overtime',
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
            itemList:[]
        }
    },
    methods:{
        tablist(index){//待处理，已发起，已处理
            this.tabTaskList.status=index
            this.tabTaskList.type='overtime'
            this.getTaskList()
        },
        changeTab(type){//加班或休假
            this.tabTaskList.type=type
            this.getTaskList()
        },
        getTaskList(){//页面初始数据
            api.TaskList({
                ...this.tabTaskList
            }).then(res=>{
                this.itemList=res.data.data
                // console.log(res.data)
            })
        }

    },
    
    created(){//页面初始化
        this.getTaskList()
    }
}
</script>
<style lang="scss" scoped>

@import '../../../static/_minix.scss';
@import '../../../static/common.scss';
    .home{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        .add{
            position: fixed;
            bottom:pxTorem(30px);
            right:pxTorem(20px);
            background: rgb(9,98,65);
            font-size: pxTorem(18px);
            color: #fff;
            padding:pxTorem(10px) pxTorem(25px);
            border-radius: pxTorem(30px);
        }
        .head{
            display: flex;
            height: pxTorem(44px);
            align-items: center;
            >div{
                flex: 1;
                display: flex;
                justify-content: center;
                font-size: pxTorem(18px);
                font-weight: bold;
            }
            span{
                margin:0 pxTorem(15px);
                font-size: pxTorem(20px);
            }
        }
        .section{
            flex:1;
            overflow: auto;
            display: flex;
            flex-direction: column;
            background: #eee;
            .list{
                flex: 1;
                font-size: pxTorem(14px);
                display: flex;
                flex-direction: column;
                overflow: auto;
            }
        }
    }
</style>
