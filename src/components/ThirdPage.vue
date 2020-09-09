<template>
  <div>

    <b-card class="vmi mx-auto">
    <template v-slot:header>
      <h1 class="mb-0">14 063.23 &#8364; TTC</h1>
    </template>

    <b-card-body>
      <b-card-text class="text">
        <b-card-title class="title">EMPRUNTEUR</b-card-title>
        <b-list-group flush>
          <b-list-group-item>
            <h3>58.01 &#8364; TTC/MOIS</h3>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>

      <b-card-text class="text">
        <b-card-title class="title">CO-EMPRUNTEUR</b-card-title>
        <b-list-group flush>
          <b-list-group-item>
            <h3>39.65 &#8364; TTC/MOIS</h3>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>

      <b-card-text class="text">
        <b-list-group flush>
          <b-list-group-item>
            <h3>Vous souhaitez assurer un prêt immobilier de 456 783 &#8364; sur une durée de 12 ans</h3>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>

      <b-card-text class="text">
        <b-list-group>
          <b-list-group-item>
            <h3>Taux moyen d'assurance: 0.13 &#37;</h3>
            <h3>Prime moyenne annuelle: 1171.94 &#8364;</h3>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>

      <b-card-text class="text-border">
        <b-card-title class="title">EMPRUNTEUR PRINCIPAL</b-card-title>
        <b-list-group flush>
          <b-list-group-item>
            <h3>58.01 &#8364; TTC/MOIS</h3>
            <h3>Cotisation mensuelle moy.</h3>
            <p><b-icon class="icon" icon="check2"></b-icon>Décés</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Perte d'autonomie</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Invalidité</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Arrêt de travail</p>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>

      <b-card-text class="text-border">
        <b-card-title class="title">CO-EMPRUNTEUR PRINCIPAL</b-card-title>
        <b-list-group flush>
          <b-list-group-item>
            <h3>39.65 &#8364; TTC/MOIS</h3>
            <h3>Cotisation mensuelle moy.</h3>
            <p><b-icon class="icon" icon="check2"></b-icon>Décés</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Perte d'autonomie</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Invalidité</p>
            <p><b-icon class="icon" icon="check2"></b-icon>Arrêt de travail</p>
          </b-list-group-item>
        </b-list-group>
      </b-card-text>
    </b-card-body>

    <b-card-footer>
      <h1>Équivalence bancaire:</h1>
      <h1>AXA Banque</h1>
    </b-card-footer>
  </b-card>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('form/handlers14', false)
    this.$store.dispatch('form/handlers15', false)
    this.$store.dispatch('form/handlers16', true)
  },
}
</script>

<style>
  .vmi {
    text-align: center;
  }

  .text {
    border-bottom: 3px solid #ee7101;
  }

  .text-border {
    border-left: 3px solid #ee7101;
    border-bottom: 3px solid #ee7101;
    border-right: 3px solid #ee7101;

    margin: 10px !important;
  }

  .icon {
    margin-right: 10px !important;
  }

  .title {
    color: #ee7101;
  }

  .card {
    width: 80%;
    margin-top: 250px;
    border: 10px solid #ee7101;
    border-radius: 30px;
    -webkit-box-shadow: 2px 7px 31px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 7px 31px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 7px 31px 0px rgba(0,0,0,0.75);
    color: #004161;
  }

  .firstRow {
    margin-left: 10px;
  }

  .total {
    margin-top: -20px;
  }

  .amount {
    border-right: 10px solid #004161;
    border-bottom: 10px solid #004161;
    margin-bottom: 70px;
  }

  .emprunter {
    margin-left: 300px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .emprunter2 {
    margin-left: 300px;
    margin-right: 10px;
    margin-top: 5px;
  }

  .co-emprunter {
    border-top: 10px solid #004161;
    padding-top: 30px;
  }

  #euro {
    padding-bottom: 18px;
    padding-left: 10px;
  }

  #euro2 {
    padding-top: 5px;
    padding-left: 10px;
  }

  #ttc {
    padding-left: 5px;
    padding-top: 15px
  }

  #ttc2 {
    padding-left: 5px;
    padding-top: 6px;
    margin-right: 5px
  }

  #mois {
    padding-top: 6px;
  }

  .secondRow {
    border-top: 10px solid #004161;
  }

  .res {
    margin-top: 20px;
  }

  .int {
    border-top: 10px solid #004161;
    border-bottom: 10px solid #004161;
  }

  .interest {
    margin-top: 20px;
    margin-left: 40%;
  }

  .interest2 {
    margin-top: 60px;
    margin-left: -250px;
  }

  .result {
    margin-left: 600px;
  }

  .bank {
    margin-top: 40px;
  }
</style>