<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="transparent">
        <v-card-title class="white--text">
          Todo List Items
          <v-spacer></v-spacer>
          <span>
            <v-text-field
              v-model="search"
              label="Search"
              dense
              class="custom-text-color"
              hide-details="auto"
            ></v-text-field>
          </span>
          <v-btn
            class="ml-2"
            small
            depressed
            color="success"
            @click="OpenDialog = !OpenDialog"
            >Add Todo</v-btn
          >
        </v-card-title>
        <v-card-text>
          <v-col cols="12">
            <v-data-table
              dense
              :headers="headers"
              :items="Todos"
              :search="search"
              item-key="name"
              class="elevation-1 c-table"
            >
              <template #[`item.Priority`]="{ item }">
                <v-progress-linear v-model="item.Priority" height="25">
                  <strong>{{ Math.ceil(item.Priority) }}%</strong>
                </v-progress-linear>
              </template>
              <template #[`item.actions`]="{ item }">
                <v-btn
                  small
                  icon
                  depressed
                  color="success"
                  @click="editdata(item)"
                  ><v-icon small>mdi-pencil</v-icon></v-btn
                >
                <v-btn
                  small
                  depressed
                  icon
                  color="error"
                  @click="deletedata(item)"
                  ><v-icon small>mdi-delete</v-icon></v-btn
                >
              </template>
            </v-data-table>
          </v-col>
        </v-card-text>
      </v-card>
    </v-col>
    <todoList
      v-if="OpenDialog"
      :item="Itemd"
      @saveedit="edithandler"
      @getval="saveval"
      @close="OpenDialog = !OpenDialog"
    />
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      OpenDialog: false,
      Itemd: {},
      search: "",
      headers: [
        {
          text: "ID",
          value: "ID",
        },
        {
          text: "Todo Name",
          value: "Name",
        },
        { text: "Todo Type", value: "Type" },
        { text: "Priority", value: "Priority" },
        { text: "Is Active", value: "Active" },
        { text: "Actions", value: "actions" },
      ],
      Todos: [],
    };
  },
  // computed: {
  //   Todos() {
  //     return this.$store.state.TODOS;
  //   },
  // },
  mounted() {
    this.getTodos();
  },
  methods: {
    saveval(e) {
      console.log(e);
      this.OpenDialog = !this.OpenDialog;
      const res = JSON.parse(localStorage.getItem("todos"));
      if (res && res.length > 0) {
        e.Priority = Number(e.Priority) * 10;
        e.ID = res.length;
        const arr = [e];
        const res1 = [...res, ...arr];
        this.Itemd = {};
        localStorage.setItem("todos", JSON.stringify(res1));
      } else {
        e.Priority = Number(e.Priority) * 10;
        e.ID = 1;
        const arr = [e];
        this.Itemd = {};
        localStorage.setItem("todos", JSON.stringify(arr));
      }
      //   this.Todos.push(e);
      this.getTodos();
    },
    getTodos() {
      const arr = JSON.parse(localStorage.getItem("todos"));
      this.Todos = arr;
    },
    deletedata(item) {
      const res = JSON.parse(localStorage.getItem("todos"));
      if (res) {
        const newres = res.filter((e) => e.ID !== item.ID);
        localStorage.setItem("todos", JSON.stringify(newres || null));
      }
      this.getTodos();
    },
    editdata(item) {
      this.Itemd = item;
      this.OpenDialog = true;
    },
    edithandler(item) {
      const res = JSON.parse(localStorage.getItem("todos"));
      if (res.length > 0) {
        const indx = res.findIndex((e) => e.ID === item.ID);
        res.splice(indx, 1);
        const newres = [...res, item];
        localStorage.setItem("todos", JSON.stringify(newres));
      }
      this.OpenDialog = !this.OpenDialog;
      this.Itemd = {};
      this.getTodos();
    },
  },
};
</script>
<style scoped>
.c-table thead {
  background-color: #066af3 !important;
}
.theme--light.v-input {
  color: #fff !important;
}
.custom-text-color input {
  color: #fff !important; /* Replace with your desired custom text color */
}
</style>
