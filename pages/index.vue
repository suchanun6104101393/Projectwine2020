<template>
  <div>
    <v-carousel :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/121578383_626105911392582_6048212309694526903_n.png?_nc_cat=108&_nc_sid=ae9488&_nc_eui2=AeGpPw5vOOSB4xIOCWO5hsjeR4Mey-AQcxlHgx7L4BBzGcMdQF_GPQOg0IVrVE5MdtqsL3k9th9PB5lTCXlfJSfP&_nc_ohc=1xk-N8eovMAAX_ZrHM9&_nc_ht=scontent.fcnx3-1.fna&oh=a0a5e15f7e0fce027dbda35ca4855bac&oe=5FB01640',
        },
        {
          src:
            'https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/122120339_354885455749823_1634287894912621732_n.png?_nc_cat=109&_nc_sid=ae9488&_nc_eui2=AeE1Sg3yBtUo-khGsmoBmNztOr2RWHLiDxs6vZFYcuIPG34i1PdKV_yc7tzDn7FHSQ9LVxQWS-NnHLoMx0DAPOy6&_nc_ohc=VVhR7yc8iW8AX8yTDxR&_nc_ht=scontent.fcnx3-1.fna&oh=34e814a7cb2429b3a380f94083d613b9&oe=5FB059FB',
        },
        {
          src: 'https://media0.giphy.com/media/n3WqwXtEHrQ6axuMR4/200.gif',
        },
        {
          src:
            'https://scontent.fcnx3-1.fna.fbcdn.net/v/t1.15752-9/121016988_721006245152602_3321374676846197707_n.png?_nc_cat=107&_nc_sid=ae9488&_nc_eui2=AeELHxbB7AymEgDVw-P95kd87k0leg2M7UPuTSV6DYztQxPcXcDajMUTjugee5qXZHywcG2KZI8rSM3ugPZbJiKP&_nc_ohc=pEh60Vc6940AX9j63wH&_nc_ht=scontent.fcnx3-1.fna&oh=aa4fd94091c71feee5a6b7a0d7830909&oe=5FA5B95E',
        },
      ],
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
h1 {
  font-family: 'Itim', cursive;
}
.theme--dark.v-application {
  background-image: url('https://cdn.pixabay.com/photo/2020/05/04/09/02/wine-5128360_960_720.jpg?fbclid=IwAR3zrtRbip-gb9FHrDDK14Q-zgYYl7-UdpNRPGz1kf7tzx8BQF9cC1Hp5M8');
  background-size: cover;
}
</style>
