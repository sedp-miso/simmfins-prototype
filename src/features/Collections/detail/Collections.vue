<template>
  <div>
    <div class="row q-my-md text-subtitle1 text-bold text-grey">
      <div class="col">COLLECTIONS</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold q-mt-xs" color="info">{{ 155.00 | currency('') }}</q-badge>
      </div>
    </div>

    <div class="row q-mt-md">
      <q-list class="col payment-types">
        <q-item class="q-px-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">Pledge Savings</q-item-label>
            <q-item-label class="text-subtitle1">100.00</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div>
              <q-popup-edit v-model="ps" buttons>
                <q-input
                  type="number"
                  v-model="ps"
                  input-class="text-bold"
                  @focus="$event.target.select()"
                  label="Amount Paid"
                  dense
                  autofocus
                />
              </q-popup-edit>
              <q-item-label class="text-h6 text-primary">{{ps | currency('')}}</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>

        <q-item class="q-pa-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">MBA</q-item-label>
            <q-item-label class="text-subtitle1">25.00</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div>
              <q-popup-edit v-model="mba" buttons>
                <q-input
                  type="number"
                  v-model="mba"
                  input-class="text-bold"
                  @focus="$event.target.select()"
                  label="Amount Paid"
                  dense
                  autofocus
                />
              </q-popup-edit>
              <q-item-label class="text-h6 text-primary">{{mba | currency('')}}</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>

        <q-item class="q-pa-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">ID</q-item-label>
            <q-item-label class="text-subtitle1">10.00</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div>
              <q-popup-edit v-model="id" buttons>
                <q-input
                  type="number"
                  v-model="id"
                  input-class="text-bold"
                  @focus="$event.target.select()"
                  label="Amount Paid"
                  dense
                  autofocus
                />
              </q-popup-edit>
              <q-item-label class="text-h6 text-primary">{{id | currency('')}}</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>

        <q-item class="q-pa-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">Passbook</q-item-label>
            <q-item-label class="text-subtitle1">20.00</q-item-label>
          </q-item-section>

          <q-item-section side>
            <div>
              <q-popup-edit v-model="passbook" buttons>
                <q-input
                  type="number"
                  v-model="passbook"
                  input-class="text-bold"
                  @focus="$event.target.select()"
                  label="Amount Paid"
                  dense
                  autofocus
                />
              </q-popup-edit>
              <q-item-label class="text-h6 text-primary">{{passbook | currency('')}}</q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>

        <!-- <q-item class="q-pa-none">
          <q-item-section>
            <q-item-label class="text-subtitle1 text-bold">TOTAL</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-item-label class="text-bold text-h6">{{ (ps + mba + id + passbook) | currency('')}}</q-item-label>
          </q-item-section>
        </q-item>-->
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collections",
  data() {
    return {
      ps: 100.0,
      mba: 25.0,
      passbook: 20.0,
      id: 10.0
    };
  },
  computed: {}
};
</script>

<style>
</style>
