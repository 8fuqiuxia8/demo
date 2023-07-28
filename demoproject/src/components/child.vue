<template>
  <h3>Child</h3>
  <button @click="ClickEvent">传递数据</button>
</template>
<script>
export default{
  data(){
    return{
    msg:"child数据hhh"
    }
  },
  methods:{
    ClickEvent(){
      this.$emit("someEvent",this.msg)
    }
  },
  props:["title","age","names"]
}
</script>