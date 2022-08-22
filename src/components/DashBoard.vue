<template>
    <div>
        <h2>Welcome</h2>
        
    </div>
</template>

<script>
const axios=require('axios');
export default {
    data () {
       
    },
   mounted(){
      this.checkLoggedIn()
   },
    methods: {
        checkLoggedIn:function () {
            let token=window.localStorage.getItem('token')
            if(token==null){
                this.$router.push({name:'login'})
            }
            axios.get('http://localhost:8000/api/userInfo',{
                headers: {Authorization: 'Bearer '+token}
            })
            .then(response=>{
                console.log(response)
            })
            .catch(response=>{
                console.log(response)
            })
        }
    }
};
</script>
