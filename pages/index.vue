<template>
  <div>
    <v-row class="justify-center">
      <NewsHeadings @search="(v) => (type = v)" />
      <v-col cols="4" v-for="item in Items" :key="item.Id">
        <v-card hover>
          <v-img
            height="250"
            :src="
              item.urlToImage
                ? item.urlToImage
                : require(`~/assets/images/2.jpg`)
            "
          >
            <v-card-title class="white--text">{{ item.title }}</v-card-title>
          </v-img>
          <v-card-text class="">
            <h5>
              {{ (item.description || "no description").substring(-1, 200) }}...
            </h5>
            <h6 align="right">
              Author {{ item.author }}<br />
              Published {{ item.publishedAt }}
            </h6>
          </v-card-text>
          <v-card-actions class="">
            <v-spacer></v-spacer>
            <v-btn depressed small color="info">Favourite</v-btn>
            <v-btn small :to="item.url" depressed color="primary">Visit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name:"NewsApi",
  middleware:'validation',
  data() {
    return {
      Items: [],
      type: "tech",
      Domain: "",
      API_KEY: "f8fb09a71af442718207d5bc293c2429",
    };
  },
  computed: {
    SearchType() {
      return this.type;
    },
  },
  watch: {
    SearchType(newold, old) {
      this.getNews();
    },
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews(itm) {
      if (itm) {
        this.type = itm;
      }
      const res = await this.$axios.$get(
        `https://newsapi.org/v2/everything?${
          this.type ? "q=" + this.type : ""
        }&apiKey=${this.API_KEY}`
      );
      this.Items = res.articles;
      console.log(this.type);
    },
  },
};
</script>

<style lang="scss" scoped></style>
