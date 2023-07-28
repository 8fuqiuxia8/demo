<template>
  <h3>Main</h3>
  <p>搜索内容为:{{search}}</p>
  <SearchComponent @searchEvent="getSearch"/>
</template>
<script>
import SearchComponent from "@/components/SearchComponent.vue";
export default {
  components: {SearchComponent},
  data(){
    return{
      search:""
    }
  },
  methods:{
    getSearch(data){
      this.search=data;
    }
  }
}
</script>