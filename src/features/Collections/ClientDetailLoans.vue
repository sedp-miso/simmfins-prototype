<template>
  <div class="q-mb-lg">
    <!-- <div class="col q-mt-md text-h6">Loans</div> -->
    <div class="row q-my-md text-subtitle1 text-bold text-grey">
      <div class="col">LOANS</div>
      <div class="col text-right">
        <q-badge class="text-caption text-bold q-mt-xs" color="info">{{ 2101.00 | currency('') }}</q-badge>
      </div>
    </div>

    <div class="row q-mt-md">
      <q-list bordered class="col loan-payment-details">
        <q-expansion-item expand-icon-toggle>
          <template v-slot:header>
            <div class="col q-pl-sm q-py-sm">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-subtitle1 text-bold">PLPEL-01234</q-item-label>
                    <q-item-label class="text-subtitle1">
                      2,101.00
                      <span class="text-grey">●</span>
                      30/20
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <div class="q-mr-sm">
                      <q-popup-edit v-model="totalPayment" buttons>
                        <q-input
                          type="number"
                          v-model="totalPayment"
                          input-class="text-bold"
                          @focus="$event.target.select()"
                          label="Amount Paid"
                          dense
                          autofocus
                        />
                      </q-popup-edit>
                      <q-item-label class="text-h6">{{totalPayment | currency('')}}</q-item-label>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </template>

          <q-separator/>
          <q-card class="col">
            <q-card-section>
              <!-- Payment Type -->
              <div class="row">
                <q-list class="col-12 payment-types">
                  <q-item-label class="text-subtitle1 text-grey q-px-none q-mb-lg">PAYMENT TYPES
                    <q-btn dense size="sm" icon="add" color="primary" class="float-right">
                      <q-menu auto-close>
                        <q-list style="min-width: 150px">
                          <q-separator/>
                          <q-item disabled>
                            <q-item-section>CBU (5,000.00)</q-item-section>
                          </q-item>
                          <q-separator/>
                          <q-item clickable>
                            <q-item-section>SPL (500.00)</q-item-section>
                          </q-item>
                          <q-separator/>
                          <q-item clickable>
                            <q-item-section>Payment thru MBA</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </q-item-label>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1">Cash</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-popup-edit v-model="cash" buttons>
                          <q-input
                            type="number"
                            v-model="cash"
                            input-class="text-bold"
                            @focus="$event.target.select()"
                            label="Amount"
                            dense
                            autofocus
                          />
                        </q-popup-edit>
                        <q-item-label class="text-h6">{{cash | currency('')}}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1">CBU (5,000.00)</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-popup-edit v-model="cbu" buttons>
                          <q-input
                            type="number"
                            v-model="cbu"
                            input-class="text-bold"
                            @focus="$event.target.select()"
                            label="Amount"
                            dense
                            autofocus
                          />
                        </q-popup-edit>
                        <q-item-label class="text-h6">{{cbu | currency('')}}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>
                </q-list>
              </div>

              <!-- Payment Details -->
              <div class="row q-mt-md">
                <q-list class="col payment-types">
                  <q-item-label class="text-subtitle1 text-grey q-py-md">PAYMENT DETAILS</q-item-label>

                  <q-item class="q-px-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1">Current Due</q-item-label>
                      <q-item-label class="text-subtitle1">
                        1,500.00
                        <span class="text-grey">●</span>
                        {{ 1500 | currency('') }}
                      </q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-item-label class="text-h6">{{totalPayment | currency('')}}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1">Penalty</q-item-label>
                      <q-item-label class="text-subtitle1">0.00</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-item-label class="text-h6">0.00</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1">Advance</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label class="text-h6">{{ cbu | currency('')}}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <!-- <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">TOTAL</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label class="text-bold text-h6">{{ (cash + cbu) | currency('') }}</q-item-label>
                    </q-item-section>
                  </q-item>-->
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator/>

        <q-expansion-item expand-icon-toggle>
          <template v-slot:header>
            <div class="col q-pl-sm q-py-sm">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-subtitle1 text-bold">MPL-01234</q-item-label>
                    <q-item-label class="text-subtitle1">1,500.00</q-item-label>
                    <q-item-label class="text-subtitle2">24/15</q-item-label>
                    <!-- <q-item-label>
                      <q-badge
                        :color="(totalPayment2 >= 1500) ? 'positive' : 'negative'"
                        text-color="white"
                      >{{ (totalPayment2 >= 1500) ? 'PAID': 'UNPAID'}}</q-badge>
                    </q-item-label>-->
                  </q-item-section>

                  <q-item-section side>
                    <div class="q-mr-sm">
                      <q-popup-edit v-model="totalPayment2" buttons>
                        <q-input
                          type="number"
                          v-model="totalPayment2"
                          input-class="text-bold"
                          @focus="$event.target.select()"
                          label="Amount Paid"
                          dense
                          autofocus
                        />
                      </q-popup-edit>
                      <q-item-label class="text-h6">{{totalPayment2 | currency('')}}</q-item-label>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </template>

          <q-separator/>
          <q-card class="col">
            <q-card-section>
              <!-- Payment Type -->
              <div class="row">
                <q-list class="col-12 payment-types">
                  <q-item-label class="text-subtitle1 text-grey q-px-none q-mb-lg">PAYMENT TYPES
                    <q-btn dense size="sm" icon="add" color="primary" class="float-right">
                      <q-menu auto-close>
                        <q-list style="min-width: 150px">
                          <q-separator/>
                          <q-item clickable>
                            <q-item-section>CBU (5,000.00)</q-item-section>
                          </q-item>
                          <q-separator/>
                          <q-item clickable>
                            <q-item-section>SPL (500.00)</q-item-section>
                          </q-item>
                          <q-separator/>
                          <q-item clickable>
                            <q-item-section>Payment thru MBA</q-item-section>
                          </q-item>
                        </q-list>
                      </q-menu>
                    </q-btn>
                  </q-item-label>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">Cash</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-popup-edit v-model="cash2" buttons>
                          <q-input
                            type="number"
                            v-model="cash2"
                            input-class="text-bold"
                            @focus="$event.target.select()"
                            label="Amount"
                            dense
                            autofocus
                          />
                        </q-popup-edit>
                        <q-item-label class="text-h6">{{cash2 | currency('')}}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>
                </q-list>
              </div>

              <!-- Payment Details -->
              <div class="row q-mt-md">
                <q-list class="col payment-types">
                  <q-item-label class="text-subtitle1 text-grey q-py-md">PAYMENT DETAILS</q-item-label>

                  <q-item class="q-px-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">Current Due</q-item-label>
                      <q-item-label class="text-subtitle1">2,101.00</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-item-label class="text-h6">{{totalPayment2 | currency('')}}</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">Penalty</q-item-label>
                      <q-item-label class="text-subtitle1">0.00</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <div>
                        <q-item-label class="text-h6">0.00</q-item-label>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>

                  <q-item class="q-pa-none">
                    <q-item-section>
                      <q-item-label class="text-subtitle1 text-bold">Advance</q-item-label>
                    </q-item-section>

                    <q-item-section side>
                      <q-item-label class="text-h6">{{ 0.0 | currency('')}}</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator></q-separator>
                </q-list>
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-separator/>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loans",
  data() {
    return {
      totalPayment: 2101.0,
      totalPayment2: 0,
      cash: 1101.0,
      cash2: 0.0,
      cbu: 1000.0,
      cbu2: 0.0
    };
  },
  computed: {}
};
</script>

<style>
.q-list.loan-payment-details
  .q-expansion-item
  .q-expansion-item__container
  .q-item {
  padding: 0px;
}

.editable {
  cursor: pointer;
  padding: 0px 5px 5px;
  border-bottom: dotted 1px;
}
</style>
