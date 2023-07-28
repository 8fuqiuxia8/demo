<template>
    <h3>表单输入绑定v-model</h3>
    <form>
        <input type="text" v-model.trim="message"/>
        <input type="checkbox" id="checkbox"  v-model="checked"/>
        <label for="checkbox">{{ checked }}</label>
        
        <p>{{ message }}</p>
    </form>
</template>
<script>
     export default{
        data(){
            return{
                message:'',
               checked:false
            }
        }
     }
</script>