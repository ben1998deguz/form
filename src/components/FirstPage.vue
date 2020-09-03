<template>
  <div>
    <b-form class="form-inner">
      <b-form-group class="form-step step-1 step-active w-100">
        <h3 class="form-title">Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button class="ml-5 form-button" :click="handler1('Résidence principale')">Résidence principale</b-button>
          <b-button class="ml-5 form-button" :click="handler2('Résidence secondaire')">Résidence secondaire</b-button>
          <b-button class="ml-5 form-button" :click="handler3('Investissement locatif')">Investissement locatif</b-button>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Nature du projet*</h3>
        <b-button-group>
          <b-button class="ml-5 form-button">Assurer un nouveau prêt</b-button>
          <b-button class="ml-5 form-button">Assurer un prêt déjà signé</b-button>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Banque *</h3>
        <b-button-group>
          <b-form-select class="form-button" v-model="selected" :options="options" placeholder="vmi"></b-form-select>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Montant emprunté*</h3>
        <b-button-group>
         <input type="text" class="form-input" />
         <span>&#8364;</span>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>OTaux d'intérêt*</h3>
        <b-button-group>
           <input type="text" class="form-input" />
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
        </b-button-group>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'FirstPage',
  created() {
    this.$store.state.form.step1.isActive = false
  },
  computed: mapState({
    isActive: (state) => state.form.step1.isActive,
  }),
  data: () => ({
    selected: null,
    options: [
    { value: null, text: "Rechercher l'organisme" },
    { value: 'axa_banque', text: "AXA Bank" },
    { value: 'cdt_nord_courtois', text: "Courtois Bank" },
    { value: 'cdt_nord_kolb', text: "Kolb Bank" },
    { value: 'cdt_nord_laydernier', text: "Laydernier Bank" },
    { value: 'cdt_nord_nuger', text: "Bank Nuger" },
    { value: 'BQ_PALATINE', text: "Palatine Bank" }
    ]
  }),
  methods: {
    handler1(data) {
      this.$store.dispatch('form/handlers1', data)
      this.$store.state.form.step1.isActive = true
    },
    handler2(data) {
      this.$store.dispatch('form/handlers2', data)
    },
    handler3(data) {
      this.$store.dispatch('form/handlers3', data)
    }
  }
}
</script>

<style>
.form-inner {
  margin-top: 200px;
  text-align: center;
  border: 1px solid black;
  background-color: lightgrey;
}

.form-button {
  border-radius:50px;
}

.form-title {
  margin: 20px;
  margin-bottom: 20px;
}

.form-button {
  border-radius: 50px !important;
  width: 300px;
  height: 70px;
  color: #004161 !important;
  background-color: white !important;
  border-color: #ee7101 !important;
}

.form-button:hover {
  color: white;
  background-color: #ee7101 !important;
  border-color: #004161 !important;
}

.form-input {
  width: 200px;
  height: 70px;
  color: #004161 !important;
  background-color: lightgray !important;
  border: none;
  border-bottom: 3px solid #ee7101;
  text-align: center;
  outline: none;
}

.active {
  color: white;
  background-color: #ee7101 !important;
  border-color: #004161 !important;
}

span {
  content: "\20AC";
}
</style>


