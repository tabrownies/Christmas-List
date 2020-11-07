<template>
  <div class="wrapper">
    <header>
      <h1>
        <router-link class="link" to="/">Christmas List Builder</router-link>
      </h1>
      <nav>
        <ul>
          <li>
            <router-link class="link" to="/">My List</router-link>
          </li>
          <li>
            <router-link class="link" to="/sort">Sort</router-link>
          </li>
          <li>
            <router-link class="link" to="/parent-view">Parent View</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view />
    <footer>
      <a href="https://github.com/tabrownies/Christmas-List">
        Github Repository
      </a>
    </footer>
  </div>
</template>
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: #172e01;
  }
</style>
<style scoped>
  header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 30px;
    background-color: #336600;
  }

  h1 {
    font-size: 55px;
  }

  ul {
    display: flex
  }

  nav li {
    padding: 15px;
    font-size: 40px;
    list-style: none;
    
  }

  .link {
    color: #cc2900;
    text-decoration: none;
    text-shadow: 1px 1px #cccccc;
    text-align: center;
  }

  .link:hover {
    color: white;
    text-decoration: underline;
  }
  footer{
    width:100%;
    height:80px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color: maroon;
    margin-top:15px;
  }
  footer a{
    font-size:25px;
    color:whitesmoke;

  }
  footer a:hover{
    text-decoration: none;
    color:rgb(200,200,200,.4);
  }
  @media only screen and (max-width:1000px) {
    header {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    h1 {
      font-size: 30px;
    }

    nav li {
      padding: 15px;
      font-size: 20px;
      list-style: none;
    }
  }
  @media only screen and (max-width:400px){
    h1{
      font-size:24px;
    }
    ul{
      
      flex-wrap: wrap;
    }
    ul li{
      padding:5px;
    }
  }
  @media only screen and (min-width:1001px){
    nav{
      margin-left:auto;
    }
  }
</style>