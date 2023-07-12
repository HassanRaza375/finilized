<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
  >
    <v-row>
      <v-col cols="4" v-for="item in Items" :key="item.Id">
        <v-card hover>
          <v-img
            height="250"
            :src="require(`~/assets/images/${item.url || '2.jpg'}`)"
          >
            <v-card-title class="white--text">Tech Posts</v-card-title>
            <v-card-text class="white--text">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae aspernatur hic eligendi ut?
              </h5>
            </v-card-text>
            <v-card-actions class="mt-10">
              <v-spacer></v-spacer>
              <v-btn depressed color="info">Favourite</v-btn>
              <v-btn :to="`/posts/${item.Id}`" depressed color="primary"
                >Visit</v-btn
              >
            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Items: [
        { Id: "1", url: "g.jpg" },
        { Id: "2", url: "2.jpg" },
        { Id: "3", url: "3.jpg" },
        { Id: "4", url: "4.jpg" },
        { Id: "5", url: "1.JPG" },
      ],
      busy: false,
      page: 0,
      pageSize: 10,
    };
  },
  mounted() {
    // this.getPosts();
  },
  methods: {
    async loadMore() {
      this.busy = true;

      debugger;
      const data = {
        page: this.page++,
        pageSize: this.page * 10,
      };
      if (data.pageSize >= 1000) {
        return;
      }
      // const res1 = await this.$axios.$get("order/");
      const res = await this.$axios.$get("infinie/scroll", {
        params: {
          page: this.page++,
          pageSize: this.page * 10,
        },
      });
      this.Items.push(res.data);
      console.log(res);
      debugger;

      this.busy = false;
    },
    // getPosts() {
    //   for (let index = 6; index < 100; index++) {
    //     this.Items.push({ Id: index, url: "g.jpg" });
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
