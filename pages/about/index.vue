<template>
  <v-row>
    <v-col cols="6">
      <v-card rounded>
        <v-card-title class="pa-0 pr-1">
          <span
            class="py-4 rounded px-6 white--text"
            style="background: #c0392b"
            >About Section</span
          >
          <v-spacer></v-spacer>
          <span class="ml-2">
            <h5 class="mb-2" align="center">About me Page Content</h5>
          </span>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="text"
            label="Add New Content"
            dense
            outlined
            hide-details="auto"
            prepend-inner-icon="mdi-plus-box-outline"
            :append-icon="text ? 'mdi-eye' : 'mdi-eye-off'"
            @click:prepend-inner="OpenAddDialog"
          ></v-text-field>
        </v-card-title>
        <v-card-text class="text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            soluta perferendis perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            soluta perferendis perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            soluta perferendis perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            soluta perferendis perspiciatis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            soluta perferendis perspiciatis!
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-card rounded>
        <v-card-title class="white--text orange darken-4">
          User Directory

          <v-spacer></v-spacer>

          <v-btn color="white" class="text--primary" fab small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis
          a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime
          a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
        </v-card-text>

        <v-divider></v-divider>

        <v-virtual-scroll :items="items" :item-height="50" height="150">
          <template v-slot:default="{ item }">
            <v-list-item>
              <v-list-item-avatar>
                <v-avatar :color="item.color" size="46" class="white--text">
                  {{ item.initials }}
                </v-avatar>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ item.fullName }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn depressed small>
                  View User

                  <v-icon color="orange darken-4" right>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-virtual-scroll>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      items: [
        { initials: "SR", color: "error", fullName: "Hassan" },
        { initials: "SR", color: "error", fullName: "Raza" },
        { initials: "SR", color: "error", fullName: "syed" },
      ],
    };
  },
  mounted() {
    this.DumyData();
  },
  methods: {
    OpenAddDialog() {
      console.log(this.text);
    },
    DumyData() {
      for (let index = 0; index < 100; index++) {
        this.items.push({
          initials: "SR" + index,
          color: index % 2 === 0 ? "error" : "info",
          fullName: "Akbar",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
