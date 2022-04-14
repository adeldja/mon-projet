<template>
  <div class="container">
    <h1>Nouveau dessin</h1>

    <div v-if="loading" class="d-flex align-items-center">
      <strong>Chargement en cours...</strong>
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
    </div>

    <form v-else ref="form" @submit.prevent="onSubmit" :class="{ 'was-validated': wasValidated }" class="needs-validation" novalidate>
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input v-model="nom" type="text" class="form-control" id="nom" required />
        <div class="invalid-feedback">Nom invalide</div>
      </div>
      <button type="submit" class="btn btn-primary">Enregistrer</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      nom : '',
      wasValidated: false,
    };
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    onSubmit() {
      const valid = this.$refs.form.checkValidity();
      this.wasValidated = true;
      if (valid) {
        this.$store.dispatch('postDoodle', { name: this.nom })
          .then((doodle) => {
            this.$router.push({ name: 'Doodle', params: { id: doodle.id } })
          });
      }
    },
  },
}
</script>