<template>
        <h3>事件传参</h3>
        <button @click="addEvent('hello')">add</button>
        <p>{{count}}</p>
</template>
<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        addEvent(msg){
        //    e.target.innerHTML="add"+this.count
        console.log(msg)
            this.count++
        }
    }
}
</script>
