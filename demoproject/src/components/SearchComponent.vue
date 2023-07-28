<template>
  <h3>SearchComponent</h3>
  搜索:<input type="text" v-model="search"/>
</template>
<script>
export default{
  data(){
    return{
      search:""
    }
  },
  watch:{
    search(newvalue,oldvalue){
      this.$emit("searchEvent",newvalue)
    }
  }
}
</script>