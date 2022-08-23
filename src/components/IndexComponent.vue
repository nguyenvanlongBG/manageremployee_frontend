// IndexComponent.vue

<template>
  <div>
      <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'createpost' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                    <td><router-link :to="{name: 'editpost', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>


const axios=require('axios');
  export default {
      data() {
            
          return {
          posts: []
                 }
                    },
          
    mounted(){
        this.created()
    },
   

    methods: {
         created() {
      let token=window.localStorage.getItem('token')
            if(token==null){
                this.$router.push({name:'login'})
            }
            axios.get('http://localhost:8000/api/posts',{
                headers: {Authorization: 'Bearer '+token}
            })
            .then(response=>{
               this.posts=response.data
            })
            .catch(response=>{
                console.log(response)
            })
    },
      
    
// getListPosts() {
//       let token=window.localStorage.getItem('token')
//             if(token==null){
//                 this.$router.push({name:'login'})
//             }
//             axios.get('http://localhost:8000/api/posts',{
//                 headers: {Authorization: 'Bearer '+token}
//             })
//             .then(response=>{
//                 this.posts=response.data
//             })
//             .catch(response=>{
//                 console.log(response)
//             })
//     },
    

      deletePost(id)
      {
         let token=window.localStorage.getItem('token')
            if(token==null){
                this.$router.push({name:'login'})
            }
            axios.delete('http://localhost:8000/api/posts/delete/'+id,{
                headers: {Authorization: 'Bearer '+token}
            })
            .then(()=>{
                 this.created()
              //  this.posts.splice(this.posts.indexOf(id),1)
               
                console.log("OK")
            })
            .catch(response=>{
                console.log(response)
            })
      }
    }
  }
</script>
