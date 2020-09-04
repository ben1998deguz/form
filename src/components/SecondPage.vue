<template>
  <div>
    <b-form class="form-inner">
      <b-form-group class="form-step">
        <h3>Date de naissance*</h3>
        <b-button-group>
          <b-form-input class="form-input" :id="`type-${types}`" :type="types"></b-form-input>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step">
        <h3>Code postal*</h3>
        <b-button-group>
          <b-form-input class="form-input"></b-form-input>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Durée totale du prêt*</h3>
        <b-button-group>
          <b-form-select class="form-button" v-model="selectedProfessional" :options="optionsProfessional"></b-form-select>
        </b-button-group>
      </b-form-group>
      <b-form-group class="form-step step-1 step-active w-100">
        <h3>Durée totale du prêt*</h3>
        <b-form-checkbox-group
            v-model="selectedCheck"
            :options="optionsCheck"
            name="buttons-1"
            buttons
          ></b-form-checkbox-group>
      </b-form-group>
       <b-form-group class="form-step step-1 next">
        <b-button-group>
          <b-button v-on:click="third()" class="form-button form-next">
            Etape suivante
            <b-icon icon="arrow-right"></b-icon>
          </b-button>
        </b-button-group>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'secondPage',
  data: () => ({
    types: 'date',
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
    optionsCheck: [
      { value: 'Non', text: 'Non' },
      { value: 'Oui', text: 'Oui' }
    ]
  }),
  methods: {
    third() {
      this.$router.push('/thirdPage')
    }
  }
}

</script>

<style>
.form-inner {
  margin-top: 200px;
  text-align: center;
  background-color: lightgrey;
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
  outline: none;
}
</style>

