<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.content" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary" type="submit">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
const axios=require('axios');
    export default {
        data(){
        return {
          post:{
            title: '',
            content:'',
          }
        }
    },
    methods: {
      
      

    addPost(){
      let token=window.localStorage.getItem('token');
      if(token==null){
        this.$route.push({name:'login'});
      }

    axios.post('http://localhost:8000/api/posts/createPost',
    this.post,
    {headers:{Authorization: 'Bearer '+token}})
            .then(()=>{
                console.log(this.post)
            })
            .catch(()=>{
                 console.log(this.post)
            })
}

    }
  }
</script>
