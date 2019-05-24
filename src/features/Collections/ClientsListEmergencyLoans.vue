<template>
  <div>
    <div class="text-subtitle1 text-bold text-grey">EMERGENCY LOANS</div>

    <q-list class="q-pa-none">
      <q-item class="q-px-none">
        <q-item-section avatar style="min-width: 42px">
          <q-avatar size="48px">
            <img src="https://cdn.quasar-framework.org/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1 text-weight-bold">Maria Juan Dela Cruz Santiago</q-item-label>
          <q-item-label class="text-subtitle1">PLPEL</q-item-label>
          <q-item-label class="text-subtitle1">
            {{ 1000.00 | currency('') }}
            <span class="text-grey">●</span>
            1 month
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
    </q-list>

    <div class="row q-pt-sm">
      <div class="col text-grey">TOTAL RELEASED</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold" color="info">{{ 9500.00 | currency('') }}</q-badge>
      </div>
    </div>

    <q-item class="q-px-none">
      <q-item-section>
        <q-btn color="primary" icon="add" label="add Loan" @click="addNewDialog = !addNewDialog"></q-btn>
      </q-item-section>
    </q-item>

    <span class="q-ma-lg"></span>

    <EmergencyLoanForm :show.sync="addNewDialog"/>
  </div>
</template>

<script>
import EmergencyLoanForm from "./ClientsListEmergencyLoansForm";

export default {
  name: "EmergencyLoans",
  components: {
    EmergencyLoanForm
  },
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
