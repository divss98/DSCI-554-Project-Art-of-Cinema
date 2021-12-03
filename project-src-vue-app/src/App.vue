<template >
  <div id="app" >
    <div id="nav">
      <Header/>
      <b-button-group>
      <router-link to="/"><button class = 'btn'>Home</button></router-link> <p/>
 
      <!-- <router-link to="/d3chart"><button class = 'btn'>D3 Chart</button></router-link> <p/> -->
      
      <router-link to="/MapBox"><button class = 'btn'>MapBox Chart</button></router-link>  <p/>

      <router-link to="/IntBarAction"><button class = 'btn'>Action</button></router-link> <p/>

      <router-link to="/IntBarAdventure"><button class = 'btn'>Adventure</button></router-link><p/>

       <router-link to="/IntBarComedy"><button class = 'btn'>Comedy</button></router-link><p/>

       <router-link to="/CertificatePie"><button class = 'btn'>Movie Certificate Distribution</button></router-link> <p/>

       <router-link to="/TimeLine"><button class = 'btn'>Era Timeline</button></router-link> <p/>

       <router-link to="/Tree"><button class = 'btn'>Oscar Awards History</button></router-link> <p/>
       <router-link to="/Prop_Symbol_Map"><button class = 'btn'>Movie Distribution Chart</button></router-link> 
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
      padding: 16px 48px 18px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  background: #acddde;
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