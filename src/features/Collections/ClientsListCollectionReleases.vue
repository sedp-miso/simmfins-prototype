<template>
  <div>
    <div class="text-subtitle1 text-bold text-grey">COLLECTION RELEASES</div>

    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">
            {{ 'MPL' }}
            <span class="text-grey">●</span>
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

      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">
            {{ 'MPL' }}
            <span class="text-grey">●</span>
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

    <div class="row q-pt-sm">
      <div class="col text-grey">TOTAL RELEASED</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold" color="info">{{ 9500.00 | currency('') }}</q-badge>
      </div>
    </div>
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
