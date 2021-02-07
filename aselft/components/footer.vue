<template>
  <div>
    <div class="footer">
    
      <v-card-title class="teal">
        <strong class="subheading"
          >Get connected with us on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="footer-card">
        {{ new Date().getFullYear() }} — <strong>A self t</strong>
      </v-card-text>
    
    </div>
  </div>
</template>
    <script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
<style>
.footer {
 background-color: #302b2be8;
  color: white;
}
.footer-card{
  text-align: center;
}
</style>