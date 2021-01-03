
<template>
   <b-navbar id="header" fixed="top" variant="light">
     <b-navbar-brand>
       Sample Site
     </b-navbar-brand>
   </b-navbar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private dummy = "dummy"
}
</script>
