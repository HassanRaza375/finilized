<template>
  <v-row dense class="justify-center">
    <v-col cols="5">
      <v-card>
        <v-card-title>Calculator</v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12"
              ><table border="1" style="width: 100%">
                <tbody>
                  <tr colspan="100%">
                    <td align="right">
                      {{ Amount || "" }}<br />{{
                        Item.Result ? " = " + Item.Result : ""
                      }}
                    </td>
                  </tr>
                </tbody>
              </table></v-col
            >
            <v-col cols="10">
              <v-btn
                v-for="(btn, u) in numbers"
                :key="btn.id"
                rounded
                depressed
                large
                class="ma-1"
                @click="handleAmounts(u)"
                >{{ u }}</v-btn
              >
              <v-btn
                large
                rounded
                class=""
                @click="Amount = Amount.slice(0, -1)"
                >C</v-btn
              >
              <v-btn large rounded class="ma-1" @click="Calculate(Amount)"
                >=</v-btn
              >
            </v-col>
            <v-col cols="2">
              <v-btn
                v-for="(s, u) in signs"
                :key="u"
                depressed
                small
                class="ma-1"
                @click="handleAmounts(s)"
                >{{ s }}</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      Item: { Result: "" },
      Amount: "",
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      signs: ["+", "-", "*", "/"],
    };
  },
  mounted() {},
  methods: {
    handleAmounts(val) {
      this.Amount += val;
      this.Calculate(this.Amount);
    },
    Calculate(val) {
      const check = val.split("")[val.split("").length - 1];
      const check2 = this.signs.includes(check);
      if (check2) {
        return;
      }
      const res = eval(val);
      this.Item.Result = res;
    },
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
}
table tr td {
  padding: 20px 10px 20px 0px;
}
.v-input input {
  color: aliceblue !important;
}
</style>
