<template>
  <div>
    <div class="row q-my-md text-subtitle1 text-bold text-grey">
      <div class="col">CENTER RELEASE</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold q-mt-xs" color="info">{{ 9500.00 | currency('') }}</q-badge>
      </div>
    </div>
    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">
            {{ 10000.00 | currency('') }}
            <span class="text-grey">●</span>
            {{ 9500.00 | currency('') }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle color="blue" v-model="released" val="battery"/>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>
    </q-list>
    <span class="q-ma-lg"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedClient: null,
      clients: [],
      released: false
    };
  }
};
</script>

<style>
</style>
