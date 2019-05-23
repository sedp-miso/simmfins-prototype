<template>
  <div>
    <div class="text-subtitle1 text-bold text-grey">ELIGIBLE LOAN BORROWERS</div>
    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">{{ 'PLPEL' }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle color="blue" v-model="released" val="battery"/>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">{{ 'MPL' }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle color="blue" v-model="released" val="battery"/>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

       <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juana Dela Cruz</q-item-label>
          <q-item-label class="text-subtitle1">{{ 'WFL' }}</q-item-label>
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
