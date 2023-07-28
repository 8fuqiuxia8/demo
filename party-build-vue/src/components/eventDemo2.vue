<template>
    <h3>事件传参</h3>
    <p @click="getNameHandler(item,$event)" v-for="item in names" :key="index">{{ item }}</p>
</template>
<script>
    export default{
        data(){
            return{
                names:["星期一","星期二","星期三"]
            }
        },
    
    methods:{
        getNameHandler(names,e){
            console.log(names)
            console.log(e)
        }
    }
    }
</script>
