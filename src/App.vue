<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar{
  width: 7px;
  background-color: #7c849271;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb{
  background:#dce4f39a;
  border-radius:10px;
  border-radius:20px;
}
::-webkit-scrollbar-thumb:hover{
  background:#dce4f39a;
}
::-webkit-scrollbar-thumb:active{
  border: 0;
  border-radius: 0;
  background: rgba(0,0,0,0.4);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:#dce4f32f;
}
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%; 
}

</style>
