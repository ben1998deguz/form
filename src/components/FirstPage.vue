<template>
  <div>
    <b-form class="form-inner">
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button class="ml-5" :click="handler1()">Button 1</b-button>
          <b-button class="ml-5">Button 2</b-button>
          <b-button class="ml-5" v>Button 3</b-button>
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
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
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
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button>Button 1</b-button>
          <b-button>Button 2</b-button>
          <b-button>Button 3</b-button>
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
    <h1>step: {{one}}</h1>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'FirstPage',
  props: {
    msg: String
  },
  /* computed: mapState({
    one: (state) => state.form.step1.one,
  }), */
  data: () => ({
  }),
  methods: {
    handler1() {
      this.one = 'Résidence principale';
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
</style>


