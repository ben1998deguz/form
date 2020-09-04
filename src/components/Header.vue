<template>
  <div>
    <header class="cbo-header">
      <div class="header-steps">
          <h1 class="steps-title">ESTIMEZ VOTRE ASSURANCE DE PRÊT IMMOBILIER</h1>
          <div class="steps-lists">
            <div class="steps-list">
                <button class="list-el" :class="{ active: isActive1 }"><span>1</span></button>
                <button class="list-el" :class="{ active: isActive2 }"><span>2</span></button>
                <button class="list-el" :class="{ active: isActive3 }"><span>3</span></button>
            </div>
            <div class="steps-current">
              <span>Votre projet</span>
            </div>
          </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState ({
    isActive1: (state) => state.form.isActive1,
    isActive2: (state) => state.form.isActive2,
    isActive3: (state) => state.form.isActive3,
  }),
}
</script>

<style>

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.cbo-header {
    display: flex;
    height: 152px;
    position: relative;
    z-index: 300;
    text-align: center;
    background-color: white;
    justify-content: center;
}

.header-steps {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 350px;
  justify-content: center;
  background-color: #ee7101;
  border: 1px solid #004161;
}

.steps-title {
  color: white;
}

.steps-lists {
  background-color: #fff;
  height: 200px;
  cursor: none;
}

.list-el {
  position: relative;
  display: inline-block;
  height: 73px;
  width: 73px;
  border-radius: 999px;
  background-color: white;
  border-color: #ee7101;
  color: #004161;
  margin-top:25px;
  margin-bottom: 15px;
  margin-left: 15px;
  font-size: 44px;
}

.steps-current {
  font-family: sans-serif;
  color: #004161;
}

.active {
  background-color: #004161;
  border-color: #ee7101;
  color: #004161;
}

</style>