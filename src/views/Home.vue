<template>
  <div class="container">
    <h1>Dessins</h1>
    <h2 v-if="loading">
      
      <div class="fa-4x">
        <i class="fa fa-spinner" aria-hidden="true"></i>
      </div>
    </h2>
    <button><router-link :to="{ name: 'HomeP', params: { p: 2 } }">Page 2</router-link></button>
    <div v-for="doodle in doodles" :key="doodle.id">
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
       {{ doodle.name }}<br/>
        Date : {{ new Date(doodle.created_at * 1000).toLocaleDateString('en-US')}}
        
        <br/>
         <button type="button" class="btn btn-light" > <router-link :to="{ name: 'Doodle', params: { id: doodle.id } }">Voir le dessin</router-link></button>  
      </div>
    </div>
  </div>
  </div>
  </div>

</div>



</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['loading', 'doodles']),
  mounted() {
    this.$store.dispatch('getDoodles');
  }
};
</script>

<style >
.btn{
  text-align: right;
  margin-left: auto;
    margin-right: 0;
    display: block;
    
}
</style>