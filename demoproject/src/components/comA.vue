<template>
  <h3>动态组件A</h3>
  <p>{{msg}}</p>
  <button @click="changeData">更新数据</button>
</template>
<script>
export default {
  data(){
    return{
      msg:"老数据"
    }
  },
  beforeUnmount() {
    console.log("组件销毁之前");
  },
  unmounted(){
    console.log("组件销毁之后");
  },
 methods:{
   changeData(){
     this.msg="新数据"
   }
 }
}
</script>