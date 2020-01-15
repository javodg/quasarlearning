<template>
  <q-page class="flex justify-around">
    <!-- class="flex justify-around" -->
    <div class="row">
      <img
        alt="Quasar logo"
        class="col-12"
        src="~assets/images/hero.png"
      >
    </div>
    <div class="row q-glutter-xs">
      <div class="col-12 text-subtitle1 text-weight-medium text-center">Que quieres buscar hoy?</div>
    </div>
    <div class="row q-glutter-md">
      <q-input
        outlined="bg-teal text-white"
        label="Buscar"
        class="col-10"
        bottom-slots
      >
        <template v-slot:append>
          <q-icon name="fa fa-search"></q-icon>
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
