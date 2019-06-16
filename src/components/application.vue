<template>
    <div class="detail">
        <nav class="nav">
            <span class='iconfont icon-arrow-left' @click="$router.back()"></span>
            <p>{{titleType}}</p>
            <span></span>
        </nav>
        <header class="header">
            <div class="head_msg">
                <div class="headimg">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3913721637,490556209&fm=27&gp=0.jpg" alt="">
                </div>
                <div class="users">
                    <p><span>申请人姓名</span><span></span></p>
                    <p><span>直接主管</span><span>秦义超</span></p>
                </div>
                <div><span class='iconfont icon-chevron-thin-right'></span></div>
            </div>
            <div class="bg"></div>
        </header>
        <div class="common">
            <div class="list">
                <div class="massage">
                    <h3>申请信息</h3>
                    <ul>
                        <li>
                            <span>加班日期</span>
                            <span>
                                <el-date-picker
                                  v-model="date"
                                  type="date"
                                  placeholder="选择日期">
                                </el-date-picker>
                            </span>
                        </li>
                        <li>
                            <span>加班类型</span>
                            <span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                    v-for="item in this[type+'Type']"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </span>
                        </li>
                        <li>
                            <span>加班起始时间</span>
                            <span>
                                <el-time-select
                                  placeholder="起始时间"
                                  v-model="startTime"
                                  :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                  }">
                                </el-time-select>
                            </span>
                        </li>
                        <li>
                            <span>加班截止时间</span>
                            <span>
                                <el-time-select
                                  placeholder="截止时间"
                                  v-model="endTime"
                                  :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '18:30'
                                  }">
                                </el-time-select>
                            </span>
                        </li>
                        <li>
                            <span>共计时数</span>
                            <span>{{reducetime(startTime,endTime)}}天</span>
                        </li>
                    </ul>
                </div>
                <div class="reason">
                    <h3>加班事由</h3>
                    <textarea placeholder="最多可输入2000个字符" name="" id="" cols="40" rows="4" :value="list.describes"></textarea>
                </div>
                <div class="uploading">
                    <span class="iconfont icon-jia"></span>
                    <input value="上传附件" type="file" multiple @change="upload"/>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="del">取消</div>
            <div class="commit">提交</div>
        </div>

    </div>
</template>

<script>
import api from '@/api'
export default {
    props:{
        type:String,
        id:String
    },
    data(){
        return {
            list:{},
            date:'',
            startTime:'',
            endTime:'',
            value: '',
            overtimeType: [{
                value: '选项1',
                label: '双休日'
            }, {
                value: '选项2',
                label: '节假日'
            }, {
                value: '选项3',
                label: '工作日'
            }],
            vacationType:[{
                value: '选项1',
                label: '年假'
            },{
                value: '选项2',
                label: '调休'
            }]
        }
    },
    computed:{
        titleType(){
            return this.type==='overtime' ? '办公室加班申请表' : '办公室休假申请表'
        }
    },
    methods: {
        reducetime(start,end){
            let start_time=new Date(new Date(start).toGMTString())*1
            let end_time=new Date(new Date(end).toGMTString())*1
            let num = (end_time-start_time)/1000
            let day = parseInt(num/60/60/24)+Math.floor(num/60/60%24)
            // console.log()
            return day
        },
        upload(e){
            console.log(e.target.files)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../static/_minix.scss';
@import '../../static/common.scss';
    .detail{
        width:100%;
        height: 100%;
        background: #eee;
        display: flex;
        flex-direction: column;
        .nav{
            height: pxTorem(50px);
            display: flex;
            padding:0 pxTorem(15px);
            align-items: center;
            background: rgb(0,99,65);
            color:#fff;
            p{
                flex:1;
                font-size:pxTorem(18px);
                text-align: center;
            }
            span{
                font-size:pxTorem(20px);
            }
            
        }
        .header{
            display: flex;
            flex-direction: column;
            position: relative;
            .head_msg{
                display: flex;
                align-items: center;
                padding:pxTorem(10px) pxTorem(15px);
                background: rgb(0,99,65);
                color:#fff;
                padding-bottom:pxTorem(25px);
                
                >div{
                    font-size:pxTorem(20px);
                }
                .headimg{
                    img{
                        width:pxTorem(50px);
                        height: pxTorem(50px);
                        border-radius: 50%;
                    }
                }
                .users{
                    flex:1;
                    font-size: pxTorem(16px);
                    padding:0 pxTorem(15px);
                    p{
                        padding:pxTorem(3px) 0;
                        display: flex;
                        span{
                            flex: 1;
                        }
                    }
                }
            }
            
            .bg{
                height: pxTorem(50px);
                width:100%;
                background: rgb(0,99,65);
                border-radius: 50%;
                overflow: hidden;
                position: absolute;
                bottom:pxTorem(-25px);
                z-index: 1;
            }
        }
        
        .common{
            flex: 1;
            position: relative;
            .list{
                position: absolute;
                left:5%;
                z-index: 2;
                width:90%;
                height: 100%;
                >div{
                    background: #fff;
                    margin-bottom: pxTorem(10px);
                    border-radius: pxTorem(10px);
                    >h3{
                        padding:pxTorem(10px) pxTorem(15px);
                        font-size: pxTorem(16px);
                        font-weight: bold;
                        border-bottom: pxTorem(.5px) solid #ccc;
                    }
                    span,textarea{
                        font-size: pxTorem(14px);
                        color: #999;
                    }
                }
                .massage{
                    >ul{
                        padding:0 pxTorem(15px);
                        li{
                            padding:pxTorem(10px) 0;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }

                .uploading{
                    padding:pxTorem(15px) pxTorem(15px);
                    .icon-jia{
                        color: #fff;
                        display: inline-block;
                        width: pxTorem(20px);
                        height: pxTorem(20px);
                        text-align: center;
                        line-height: pxTorem(20px);
                        border-radius: 50%;
                        background: gold;
                    }
                }
                
            }
        }
        
        .bottom{
            width:100%;
            height: pxTorem(50px);
            display: flex;
            font-size: pxTorem(18px);
            .del{
                width:30%;
                color: rgb(0,99,65);
                background: #fff;
                text-align: center;
                line-height: pxTorem(50px);
                box-shadow: 0 pxTorem(-2px) pxTorem(5px) #ccc;
            }
            .commit{
                flex: 1;
                color: #fff;
                background: rgb(0,99,65);
                text-align: center;
                line-height: pxTorem(50px);
            }
        }
    }
</style>
