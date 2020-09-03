<template>
  <div>
    <header class="cbo-header">
      <div class="header-steps">
          <h1 class="steps-title" style="color: white">ESTIMEZ VOTRE ASSURANCE DE PRÊT IMMOBILIER</h1>
          <div class="steps-lists">
            <div class="steps-list">
                <button class="list-el"><span>1</span></button>
                <button class="list-el white"><span>2</span></button>
                <button class="list-el white"><span>3</span></button>
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
  
</script>

<style>

* {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

.cbo-header {
    display: flex;
    height: 187px;
    position: relative;
    z-index: 300;
    text-align: center;
    background-color: white;
    justify-content: center;
}

.header-steps {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  justify-content: center;
  background-color: #ee7101;
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
  margin-left: 10px;
  border-radius: 999px;
  background-color: #ee7101;
  border-color: #004161;
  color: white;
  margin-top:15px;
  margin-bottom: 15px;
  font-size: 44px;
}

.steps-current {
  font-family: sans-serif;
  color: #004161;
}

.white {
  background-color: white;
  border-color: #ee7101;
  color: #004161;
}

</style>