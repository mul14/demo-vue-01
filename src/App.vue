<template>
  <div class="container" style="margin-top: 20px;">

    <router-link to="/" class="btn btn-secondary">Home</router-link> &nbsp;
    <router-link to="/items" class="btn btn-secondary">Item list</router-link> &nbsp;
    <router-link to="/fetch" class="btn btn-secondary">Fetch data from URL</router-link>

    <div class="my-5 p-3">
      <router-view />
    </div>

  </div>
</template>