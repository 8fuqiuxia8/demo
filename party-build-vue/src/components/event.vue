
<template>
    <h3>第一课</h3>
    <p>{{ msg }}</p>
    <p>{{ number+200 }}</p>
    <p>{{ ok?true:false }}</p>
    <p v-html="rawhtml"></p>
    <button >button</button>
    <div :id="dynameId">你好</div>
      <p v-for="(item,index) in result" :key=item.id>{{ item }}-{{ item.id }}</p>
      <button @click="count++"><p>count is:{{ count }}</p></button>

</template>
<script>
export default {
  data(){
    return{
      msg:"打卡学习vue3的第一天",
      number:100,
      count:1,
      ok:true,
      dynameId:"id",
      rawhtml:"<a href='https://baidu.com'> 欢迎来到百度</a>",
      flags:["星期一","星期二","星期三","星期四"],
      result:{
          "id":"沈月",
          "number":"1号"
      
        }
    }
  }
}
</script>