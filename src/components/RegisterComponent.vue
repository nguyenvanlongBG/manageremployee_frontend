<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="user.name" name="name" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="user.email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
            </div>
            <div class="form-group">
                <label htmlFor="user.password">Password</label>
                <input type="password" v-model="user.password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
            </div>
            <div class="form-group">
                <button type="submit">Register</button>
                <router-link to="/login" class="btn btn-link">Login</router-link>
            </div>
        </form>
    </div>
</template>

<script>
const axios=require('axios');
export default {
    data () {
        return {
            user:{
            name:'',
            email: '',
            password: '',
            }
        }
    },
  
    methods: {
        handleSubmit: function() {
            this.submitted = true;
            axios.post('http://localhost:8000/api/register', this.user)
            .then(function (){
                print(this.user)
                console.log(this.user)
            })
            .catch(function (){
                print(this.user)
                console.log(this.user)
            })
        }
    }
};
</script>
