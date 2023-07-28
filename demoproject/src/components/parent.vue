<template>
  <h3>Parent</h3>
  <child @someEvent="getHandle"/>
  <p>父类元素：{{message}}</p>
</template>
<script>
import Child from "@/components/child.vue";
export default{
  components: {Child},
  data(){
    return{
      message:""
    }
  },
  methods:{
    getHandle(data){
      console.log("活着-余华",data);
      this.message=data;
    }
  }
}
</script>