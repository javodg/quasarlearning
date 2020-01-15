<template>
  <q-layout view="hhh lpR fFf">
    <q-footer elevated>
      <q-tabs
        v-model="menu"
        style="font-size: 1.5em"
      >
        <q-tab>
          <q-icon name="fa fa-home"></q-icon>
        </q-tab>
        <q-tab>
          <q-icon name="fa fa-arrow-alt-circle-left"></q-icon>
        </q-tab>
        <q-tab>
          <q-icon name="fa fa-search"></q-icon>
        </q-tab>
        <q-tab>
          <q-icon name="fa fa-bookmark"></q-icon>
        </q-tab>
        <q-tab>
          <q-icon name="fa fa-cog"></q-icon>
        </q-tab>
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-book" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-code-branch" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
      <q-page-sticky
        position="top-right"
        :offset="[18, 18]"
      >
        <q-fab
          v-bind:icon=random
          direction="down"
          color="accent"
        >
          <q-fab-action
            @click="onClick"
            color="primary"
            icon="fa fa-home"
          />
          <q-fab-action
            @click="onClick"
            color="primary"
            icon="fa fa-home"
          />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      random: 'img:https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 99) + '.jpg'
    }
  }
}
</script>
