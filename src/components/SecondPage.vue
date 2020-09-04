<template>
  <div>
    <pre>
      {{celander}}
      {{referenceNumber}}
      {{selectedProfessional}}
      {{selectedCheck}}
      </pre>
    <b-form class="form-inner">
      <b-form-group class="form-step w-100">
        <h3>Date de naissance*</h3>
        <b-button-group>
          <input v-model="celander" @change="active1()" class="form-input" :id="`type-${types}`" :type="types" />
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step w-100" :class="{ zeroMargin: isActive1Step1 }">
        <h3>Code postal*</h3>
        <b-button-group>
          <input type="number" v-model="referenceNumber" @change="active2()" class="form-input" />
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step2 }">
        <h3>Durée totale du prêt*</h3>
        <b-button-group>
          <b-form-select @change="active3()" class="form-button" v-model="selectedProfessional" :options="optionsProfessional"></b-form-select>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100" :class="{ zeroMargin: isActive1Step3 }">
        <h3>Durée totale du prêt*</h3>
        <b-form-checkbox-group v-model="selectedCheck">
          <b-form-checkbox @change="active4()" value="false">Non</b-form-checkbox>
          <b-form-checkbox @change="active4()" value="true">Oui</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
       <b-form-group class="form-step step-1 w-100" :class="{ zeroMargin: isActive1Step4 }">
        <b-button-group>
          <b-button v-on:click="third()" class="form-button form-next">
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
  name: 'secondPage',
  created() {
    this.$store.dispatch('form/handlers14', false)
    this.$store.dispatch('form/handlers15', true)
    this.$store.dispatch('form/handlers16', false)
  },
  data: () => ({
    celander: '',
    types: 'date',
    referenceNumber: '',
    selectedProfessional: null,
    optionsProfessional: [
      { value: null, text: "Choisir" },
      { value: "SalarieNonCadre", text: "Salarié non cadre (hors employé de bureau), agent de maîtrise" },
      { value: "EmployeBureauCommercial", text: "Employé de bureau, commercial sédentaire" },
      { value: "DirigeantGerant", text: "Dirigeant de société, gérant, chef d'entreprise (hors agricole)" },
      { value: "ProfessionLiberale", text: "Profession libérale (hors médical et paramédical)" },
      { value: "Medecin", text: "Médecin (ou interne) généraliste ou spécialiste" },
      { value: "AutresMetiersMedicaux", text: "Autres métiers médicaux et paramédicaux" },
      { value: "FonctionnaireClasseA", text: "Fonctionnaire classe A" },
      { value: "FonctionnaireHorsClasseA", text: "Fonctionnaire hors classe A" },
      { value: "Artisan", text: "Artisan, métiers du BTP, auto-entrepreneur" },
      { value: "Commercant", text: "Commerçant" },
      { value: "Ouvrier", text: "Professions du transport, ouvriers, technicien" },
      { value: "ExploitantAgricole", text: "Professions agricoles" },
      { value: "Retraite", text: "Retraité : cadre, assimilé-cadre, fonctionnaire classe A, chef d'Entreprise, profession libérale" },
      { value: "AutresRetraites", text: "Autres retraités" },
      { value: "Intermittent", text: "Intermittent" },
      { value: "SansProfession", text: "Sans profession, étudiant, saisonnier" }
    ],
    selectedCheck: null,
    isActive1Step1: false,
    isActive1Step2: false,
    isActive1Step3: false,
    isActive1Step4: false
  }),
  methods: {
    third() {
      this.$router.push('/thirdPage')
      this.$store.dispatch('form/handlers15', false)
      this.$store.dispatch('form/handlers16', true)
    },
    active1() {
      this.isActive1Step1 = true;
      this.$store.dispatch('form/handlers10', this.celander)
    },
    active2() {
      this.isActive1Step2 = true;
      this.$store.dispatch('form/handlers11', this.referenceNumber)
    },
    active3() {
      this.isActive1Step3 = true;
      this.$store.dispatch('form/handlers12', this.selectedProfessional)
    },
    active4() {
      this.isActive1Step4 = true;
      this.$store.dispatch('form/handlers13', this.selectedCheck)
    }
  }
}

</script>

<style>
.form-inner {
  margin-top: 200px;
  text-align: center;
}

  .form-step {
  text-align: center;
  background-color: white;
  margin-top: 300px;
  padding: 15px;
  border-radius: 30px;
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

