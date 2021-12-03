<template >
  <div id="app" >
    <div id="nav">
      <Header/>
      <b-button-group>
      <router-link to="/"><button class = 'btn'>Home</button></router-link> <p/>
      </b-button-group>
      <br><br>
      <b-button-group>
      <router-link to="/Language"><button class = 'btn'>Language Distribution</button></router-link> <p/>
      <router-link to="/IntBarAction"><button class = 'btn'>Genre Action</button></router-link> <p/>
<router-link to="/IntBarComedy"><button class = 'btn'>Genre Comedy</button></router-link><p/>
      <router-link to="/IntBarAdventure"><button class = 'btn'>Genre Adventure</button></router-link><p/>
</b-button-group>
<br>
<br>
<b-button-group>
       <router-link to="/MapBox"><button class = 'btn'>Movie Set Locations</button></router-link>  <p/>

       <router-link to="/CertificatePie"><button class = 'btn'>Certificate</button></router-link> <p/>

       <router-link to="/TimeLine"><button class = 'btn'>Movie Eras</button></router-link> <p/>

       <router-link to="/Tree"><button class = 'btn'>Oscar Tree</button></router-link> <p/>
       <router-link to="/Prop_Symbol_Map"><button class = 'btn'>Proportional Symbol Map</button></router-link> 
    </b-button-group>
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
  /* background-image:'assets/back.jpg'; */
  background-color: #fbf4ff;
  
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
      padding: 15px 35px 15px 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background: goldenrod;
  border-radius: 500px;
  border: none;
  font-size: 15px;
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