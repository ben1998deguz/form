<template>
  <div>
    <b-form class="form-inner">
      <b-form-group class="form-step step-1 step-active w-100">
        <h3 class="form-title">Objet de l'emprunt*</h3>
        <b-button-group>
          <b-button class="ml-5 form-button" @click="handler1('Résidence principale')" :class="{ active: isActive1Step1 }">Résidence principale</b-button>
          <b-button class="ml-5 form-button" @click="handler2('Résidence secondaire')" :class="{ active: isActive2Step1 }">Résidence secondaire</b-button>
          <b-button class="ml-5 form-button" @click="handler3('Investissement locatif')" :class="{ active: isActive3Step1 }">Investissement locatif</b-button>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive4Step1 }">
        <h3>Nature du projet*</h3>
        <b-button-group>
          <b-button class="ml-5 form-button" @click="active1('Assurer un nouveau prêt')" :class="{ active: isActive1Step2 }">Assurer un nouveau prêt</b-button>
          <b-button class="ml-5 form-button" @click="active2('Assurer un prêt déjà signé')" :class="{ active: isActive2Step2 }">Assurer un prêt déjà signé</b-button>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive3Step2 }">
        <h3>Banque *</h3>
        <b-button-group>
          <b-form-select class="form-button" @change="active3()" v-model="selectedBank" :options="optionsBank"></b-form-select>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step3 }">
        <h3>Montant emprunté*</h3>
        <b-button-group>
         <input v-model="euro" @change="active4()" type="text" class="form-input" />
         <span id="euro">&#8364;</span>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step4 }">
        <h3>OTaux d'intérêt*</h3>
        <b-button-group>
           <input v-model="percent" @change="active5()" type="text" class="form-input" />
           <span id="percent">&#37;</span>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step5 }">
        <h3>Durée totale du prêt*</h3>
        <b-button-group>
          <b-form-select @change="active6()" class="form-button" v-model="selectedTime" :options="optionsTime"></b-form-select>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step6 }">
        <b-button-group>
          <b-button v-on:click="second()" class="form-button form-next">
            Etape suivante
            <b-icon icon="arrow-right"></b-icon>
          </b-button>
        </b-button-group>
        <p>* champs obligatoires</p>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  created() {
    this.$store.dispatch('form/handlers14', true)
    this.$store.dispatch('form/handlers15', false)
    this.$store.dispatch('form/handlers16', false)
  },
  data: () => ({
    selectedBank: null,
    selectedTime: null,
    euro: '',
    percent: '',
    optionsBank: [
    { value: null, text: "Rechercher l'organisme" },
    { value: 'axa_banque', text: "AXA Bank" },
    { value: 'cdt_nord_courtois', text: "Courtois Bank" },
    { value: 'cdt_nord_kolb', text: "Kolb Bank" },
    { value: 'cdt_nord_laydernier', text: "Laydernier Bank" },
    { value: 'cdt_nord_nuger', text: "Bank Nuger" },
    { value: 'BQ_PALATINE', text: "Palatine Bank" }
    ],
    optionsTime: [
      { value: null, text: "choisir" },
      { value: '1', text: "1 ans" },
      { value: '2', text: "2 ans" },
      { value: '3', text: "3 ans" },
      { value: '4', text: "4 ans" },
      { value: '5', text: "5 ans" },
      { value: '6', text: "6 ans" },
      { value: '7', text: "7 ans" },
      { value: '8', text: "8 ans" },
      { value: '9', text: "9 ans" },
      { value: '10', text: "10 ans" },
      { value: '11', text: "11 ans" },
      { value: '12', text: "12 ans" },
      { value: '13', text: '13 ans' },
      { value: '14', text: '14 ans' },
      { value: '15', text: '15 ans' },
      { value: '16', text: '16 ans' },
      { value: '17', text: '17 ans' },
      { value: '18', text: '18 ans' },
      { value: '19', text: '19 ans' },
      { value: '20', text: '20 ans' },
      { value: '21', text: '21 ans' },
      { value: '22', text: '22 ans' },
      { value: '23', text: '23 ans' },
      { value: '24', text: '24 ans' },
      { value: '25', text: '25 ans' },
      { value: '26', text: '26 ans' },
      { value: '27', text: '27 ans' },
      { value: '28', text: '28 ans' },
      { value: '29', text: '29 ans' },
      { value: '30', text: '30 ans' }
    ],
    isActive1Step1: false,
    isActive2Step1: false,
    isActive3Step1: false,
    isActive4Step1: false,
    isActive1Step2: false,
    isActive2Step2: false,
    isActive3Step2: false,
    isActive1Step3: false,
    isActive1Step4: false,
    isActive1Step5: false,
    isActive1Step6: false
  }),
  methods: {
    handler1(data) {
      this.$store.dispatch('form/handlers1', data)
      this.isActive1Step1 = true
      this.isActive4Step1 = true
    },
    handler2(data) {
      this.$store.dispatch('form/handlers2', data)
       this.isActive2Step1 = true
       this.isActive4Step1 = true
    },
    handler3(data) {
      this.$store.dispatch('form/handlers3', data)
       this.isActive3Step1 = true
       this.isActive4Step1 = true
    },
    second() {
      this.$store.dispatch('form/handlers6', this.selectedBank)
      this.$store.dispatch('form/handlers7', this.euro)
      this.$store.dispatch('form/handlers8', this.selectedTime)
      this.$store.dispatch('form/handlers9', this.percent)
      this.$store.dispatch('form/handlers14', false)
      this.$store.dispatch('form/handlers15', true)
      this.$router.push('/secondPage');
    },
    active1(data) {
      this.$store.dispatch('form/handlers4', data)
      this.isActive1Step2 = true;
      this.isActive3Step2 = true;
    },
    active2(data) {
      this.$store.dispatch('form/handlers5', data)
      this.isActive2Step2 = true;
      this.isActive3Step2 = true;
    },
    active3() {
      this.isActive1Step3 = true;
    },
    active4() {
      this.isActive1Step4 = true;
    },
    active5() {
      this.isActive1Step5 = true;
    },
    active6() {
      this.isActive1Step6 = true;
    }
  }
}
</script>

<style>
.form-inner {
  margin-top: 200px;
  text-align: center;
}

.form-button {
  border-radius:50px;
}

.form-title {
  margin: 20px;
  margin-bottom: 20px;
}

.form-step {
  box-shadow: 50px !important;
  background-color: white;
  margin-top: 300px;
  padding: 15px;
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
  background-color: white !important;
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

#euro {
  display: flex;
  align-items: flex-end;
  content: "\20AC";
  margin: 0;
  padding: 0;
  height: 65px;
  font-size: 30px;
}

#percent {
  display: flex;
  align-items: flex-end;
  content: "\0025";
  margin: 0;
  padding: 0;
  height: 65px;
  font-size: 30px;
}

.form-next {
  margin-top: 35px;
}

.zeroMargin {
  padding-top: 70px;
  position: fixed;
  top: 60px;
  z-index: 999;
  background-color: white;
  height: 60%;
}

select option {
  background-color: white;
}
</style>


