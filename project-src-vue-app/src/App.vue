<template>
  <div id="app">
    <div id="nav">
      <Header/>
      
      <router-link to="/"><button class = 'btn'>Home</button></router-link> <p/>
 
      <router-link to="/d3chart"><button class = 'btn'>D3 Chart</button></router-link> <p/>
      
      <router-link to="/MapBox"><button class = 'btn'>MapBox Chart</button></router-link>  <p/>

      <router-link to="/IntBarAction"><button class = 'btn'>Genre Action</button></router-link> <p/>

      <router-link to="/IntBarAdventure"><button class = 'btn'>Genre Adventure</button></router-link><p/>
       <router-link to="/IntBarComedy"><button class = 'btn'>Genre Comedy</button></router-link><p/>
<<<<<<< HEAD
       <router-link to="/CertificatePie"><button class = 'btn'>Certificate</button></router-link><p/>
       <router-link to="/Tree"><button class = 'btn'>Interactive Tree</button></router-link>
       
=======
       <router-link to="/CertificatePie"><button class = 'btn'>Certificate</button></router-link> <p/>
       <router-link to="/TimeLine"><button class = 'btn'>TimeLine</button></router-link>
>>>>>>> 001167ba9544b681cf0d89ed5bd544e930622655
    </div>
    <router-view/>
  </div>
  
</template>

<style scoped> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image:'url(https://i.redd.it/4fxxbm4opjd31.jpg)';
  background-color: antiquewhite;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btn{
      padding: 16px 48px 18px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background: hsl(141, 73%, 42%);
  border-radius: 500px;
  border: none;
  font-size: 14px;
  line-height: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  transition: all .4s ease;

}

 nav li:hover,
   nav li:active{
      background-color: indianred;
      cursor: pointer;
    }

</style>

<script>
// @ is an alias to /src
import Header from './components/Header'
export default {
  name: 'Home',
  components: {
    Header
    

  }
}
</script>