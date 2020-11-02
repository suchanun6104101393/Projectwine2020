<template>
  <div class="side">
    <br /><br />
    <h3 algin="center">ADMIN WINE STORE</h3>
    <ul>
      <nuxt-link to="/admin/admin">
        <li id="add">DataPayment</li>
      </nuxt-link>
      <nuxt-link to="/admin/ship">
        <li id="cost">DataShipping</li>
      </nuxt-link>
      <nuxt-link to="/admin/Order">
        <li id="paid">DataOrder</li>
      </nuxt-link>
    </ul>
    <br />
    <hr />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side {
  width: 250px;
  min-height: 100vh;
  background-color: dimgrey;
  position: fixed;
}

.side ul a {
  text-decoration: none;
  color: aliceblue;
}

.side ul a li {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  cursor: pointer;
  transition: 0.3s;
}
.side h3 {
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 60px;
  cursor: pointer;
  transition: 0.3s;
}

.side ul a:hover li {
  background-color: rgb(225, 225, 225);
}

.side ul a:focus li {
  background-color: rgb(190, 190, 190);
}

.side ul a:last-child:hover li {
  background-color: floralwhite;
}
</style>
