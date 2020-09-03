<template>
  <div>
    <a href="https://www.april.fr/assurance-pret">
     <header class="cbo-header">
        <div class="header-steps">
            <h1 class="steps-title" style="color: white">ESTIMEZ VOTRE ASSURANCE DE PRÊT IMMOBILIER</h1>
            <div class="steps-lists">
              <div class="steps-list">
                  <button :class="step1 ? 'clickable active list-el':'list-el'"><span>1</span></button>
                  <button :class="step2 ? 'clickable active list-el':'list-el'"><span>2</span></button>
                  <button :class="step3 ? 'clickable active list-el':'list-el'"><span>3</span></button>
              </div>
              <div class="steps-current">
                <span style="color: #F04C5D">Votre projet</span>
              </div>
            </div>
        </div>
      </header>
    </a>
  </div>
</template>

<script>
  
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.cbo-header {
    display: flex;
    height: 146px;
    position: relative;
    z-index: 300;
    text-align: center;
    background-color: lightgray;
    justify-content: center;
}

.header-steps {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  justify-content: center;
  background-color: #c9d200;
}

.steps-lists {
  background-color: #fff;
  height: 200px;
}

.list-el {
  position: relative;
  display: inline-block;
  height: 73px;
  width: 73px;
  margin-left: 10px;
  border-radius: 999px;
  background-color: #004161;
  border-color: #004161;
  color: white;
  margin-bottom: 15px;
  font-size: 44px;
}

</style>