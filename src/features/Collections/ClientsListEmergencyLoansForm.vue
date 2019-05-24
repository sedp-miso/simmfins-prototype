<template>
  <q-dialog
    v-model="show"
    :maximized="true"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-layout class="bg-white">
      <q-toolbar class="bg-primary text-white">
        <q-toolbar-title>Emergency Loan Form</q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="fas fa-times"
          size="10px"
          @click="$emit('update:show', false)"
        />
      </q-toolbar>
      <div class="row q-px-md">
        <!-- <q-input readonly class="col-12 q-py-md" v-model="member" label="Member">
          <template v-slot:append>
            <q-icon name="person"/>
          </template>
        </q-input>-->
        <q-select class="col-12" square v-model="selectedClient" :options="clients" label="Client"/>
        <q-select class="col-12" v-model="selectedClient" :options="clients" label="Loan Product"/>

        <q-select class="col-12" v-model="term" :options="[1,2,3,4,5]" label="Term (in months)"/>

        <q-select
          class="col-12"
          v-model="principal"
          :options="[500,1000,1500,2000,2500,3000,3500,4000,4500,5000]"
          label="Principal"
        />

        <q-select
          class="col-12 q-py-sm"
          dense
          v-model="selectedClient"
          :options="clients"
          label="Beneficiary"
        />

        <q-input type="textarea" class="col-12" v-model="remarks" label="Remarks"></q-input>
      </div>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn icon="save" round color="positive"></q-btn>
      </q-page-sticky>
    </q-layout>
  </q-dialog>
</template>

<script>
export default {
  name: "EmergencyLoansForm",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      selectedClient: null,
      term: 4,
      clients: [],
      released: false,
      member: "Marias Juana Dela Cruz",
      principal: 1000,
      remarks: ""
    };
  },
  methods: {}
};
</script>

<style>
</style>
