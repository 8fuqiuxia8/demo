<template>
  <keep-alive>
    <component :is="tabCom"></component>
  </keep-alive>
  <button @click="changeEvent">切换组件</button>
</template>
<script>
import {defineAsyncComponent} from "vue"
import comA from "@/components/comA.vue"
//import comB from "@/components/comB.vue"
//异步加载组件
const comB = defineAsyncComponent(() =>
import('./components/comB')
)
export default {
 components: {comA,comB},
  data(){
    return{
      tabCom:comA
    }
  },
  methods:{
   changeEvent(){
     this.tabCom = this.tabCom == "comA" ? "comB" : "comA"
   }
  }
}
</script>