<template>
  <div>
    <div class="row q-my-md text-subtitle1 text-bold text-grey">
      <div class="col">EMERGENCY LOAN</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold q-mt-xs" color="info">{{ 1000.00 | currency('') }}</q-badge>
      </div>
    </div>

    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section>
          <q-item-label class="text-subtitle1 text-bold">MPL</q-item-label>
          <q-item-label class="text-subtitle1">
            {{ 1000.00 | currency('') }}
            <span class="text-grey">●</span>
            1 months
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <q-btn round flat icon="edit" color="orange"></q-btn>
            <q-btn round flat icon="delete" color="red"></q-btn>
          </div>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-item class="q-px-none">
        <q-item-section>
          <q-btn color="primary" icon="add" label="add Loan" @click="addNewDialog = !addNewDialog"></q-btn>
        </q-item-section>
      </q-item>
    </q-list>
    <span class="q-ma-lg"></span>

    <q-dialog
      v-model="addNewDialog"
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-layout class="bg-white">
        <q-toolbar class="bg-primary text-white">
          <q-toolbar-title>Emergency Loan Form</q-toolbar-title>

          <q-btn flat round dense icon="fas fa-times" size="10px" @click="addNewDialog = false"/>
        </q-toolbar>
        <div class="row q-px-md">
          <q-input readonly class="col-12 q-py-md" v-model="member" label="Member">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-select
            class="col-12"
            dense
            v-model="selectedClient"
            :options="clients"
            label="Loan Product"
          />

          <q-input type="number" class="col-12" v-model="term" label="Term"></q-input>

          <q-input type="number" class="col-12" v-model="amount" label="Amount"></q-input>

          <q-select
            class="col-12 q-py-sm"
            dense
            v-model="selectedClient"
            :options="clients"
            label="Beneficiary"
          />

          <q-input filled type="textarea" class="col-12" v-model="remarks" label="Remarks"></q-input>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn icon="save" round color="positive"></q-btn>
        </q-page-sticky>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "EmergencyLoans",
  data() {
    return {
      addNewDialog: false,
      selectedClient: null,
      term: 4,
      clients: [],
      released: false,
      member: "Marias Juana Dela Cruz",
      amount: 1000,
      remarks: ""
    };
  },
  methods: {}
};
</script>

<style>
</style>
