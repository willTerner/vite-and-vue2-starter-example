<template>
  <div id="app">
    <div id="nav" @click="toggle">
      <div class="my-button" id="home">home</div>
      <div class="my-button" id="account">account</div>
      <div class="my-button" id="setting">setting</div>
    </div>
    <div id="main">
      {{info}}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    toggle(event){
      switch(event.target.id){
        case "home":
          this.info = "This is you home";
          break;
        case "account":
          this.info = "This is your account";
          break;
        case "setting":
          this.info = "This is your setting";
          break;
      }
    }
  },
  data:function() {
    return {
      info: "This is your home",
    };
  },
}
</script>

<style scoped>
  #app{
    height:100%;
    display:flex;
    flex-direction:column;
  }
  #nav{
    background-color:#555;
  }
  .my-button{
    padding:0.6rem;
    display:inline-block;
    float:left;
    color:white;
    cursor:pointer;
    width:6rem;
    height:3.3rem;
    line-height:3.3rem;
    text-align:center;
  }
  .my-button:hover{
    background-color:#444;
  }
  #main{
    border:thin solid black;
    flex:auto;
    box-sizing:border-box;
  }
</style>