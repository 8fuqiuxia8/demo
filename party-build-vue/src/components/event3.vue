<template>
    <h3>事件修饰符</h3>
    <a @click="clickHandler" href="https://img1.baidu.com/it/u=3128934329,512134916&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313">桌面壁纸</a>
    <div @click="clicktest">
        <p @click="clickP">测试冒泡</p>
    </div>
</template>
<script>
    export default{
        data(){

        },
        methods:{
            //阻止默认事件
            clickHandler(){
                //e.preventDefault();
                console.log("已点击");
            },
            cilcktest(){
                console.log("Div");
            },
            clickP(){
                console.log("P");
            }
        }
    }
</script>