<template>
  <div class="container">
    <div class="containerLeft">
      <h2>Logo</h2>
    </div>
    <div class="containerRight">
      <form class="loginForm">
        <div class="formGroup">
          <input type="text" placeholder="Ingresa tu usuario">
        </div>
        <div class="formGroup">
          <input type="password" placeholder="Ingresa tu contraseña">
        </div>
        <button type="submit">
          SIGN IN
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent'
}
</script>

<style scoped>
.container {
 display: flex;
 width: 100%;
 height: 100vh;
}

.containerLeft {
  background-color: red;
  width: 50%;
}

.containerRight {
  background-color: blue;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginForm {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  flex-direction: column;
  width: 50%;
  height: 50%;
  text-align: center;
  margin: 0 auto;
  border-radius: 7px;
}

button {
  padding: 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
