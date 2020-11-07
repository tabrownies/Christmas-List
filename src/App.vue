<template>
  <div class="wrapper">
    <header>
      <h1><router-link to="/">Christmas List Builder</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/">My List</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/sort">Sort</router-link></li>
        </ul>
        <ul>
          <li><router-link to="/parent-view">Parent View</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<style>

</style>
