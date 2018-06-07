<template>
  <div class="col-sm-12 col-lg-4 mb-2">
    <div class="card mb-3">
      <div class="card-header  bg-info  text-white">
        <div>{{ stock.name }}
          <small>
            (Price: {{ stock.price }} | Quantity {{ stock.quantity }}</small>
        </div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <div class="input-group mb-3">
          <input  type="number"
                  class="form-control form-style"
                  :class="{ danger: insufficientQuantity }" placeholder="Quantity"
                  v-model="quantity">
          <div class="input-group-append">
            <button class="btn btn-info btn-style"
                    @click="sellStock"
                    :disabled="btnDisabled">
                    {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      sellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.sellOrder(order);
      this.quantity = 0;
    }
  },
  computed: {
    insufficientQuantity() {
      return Number(this.quantity) > Number(this.stock.quantity);
    },
    btnDisabled() {
      return (
        this.insufficientQuantity ||
        this.quantity <= 0 ||
        !Number.isInteger(Number(this.quantity))
      );
    }
  }
};
</script>


<style lang="scss">
.form-style {
  width: 70%;
}

.form-control:focus.danger {
  border-color: #f00;
  box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
}
</style>
