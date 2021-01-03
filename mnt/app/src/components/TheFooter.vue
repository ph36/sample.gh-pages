
<template>
  <b-navbar id="footer" variant="dark">
    <b-nav-text>
      Copyright ph36. All Rigths Reserved.
    </b-nav-text>
  </b-navbar>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class extends Vue {
  private dummy = "dummy"
}
</script>
