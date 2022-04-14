<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbar-main">
          <div class="navbar-nav">
            <router-link to="/" class="navbar-brand">Exercice 2</router-link>
            <router-link to="/create" class="navbar-brand">Nouveau dessin</router-link>
          </div>
          <ul v-if="doodle.id" class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name:'Doodle', params:{ id: doodle.id} }" class="nav-link">{{ doodle.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['doodle'])
};
</script>
