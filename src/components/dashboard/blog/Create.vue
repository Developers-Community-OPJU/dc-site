<template>
  <div class="px-5 py-3">    
    <editor />
  </div>
</template>
<script>
import Editor from "../blog/EditorJS";
export default {
  data() {
    return {
      load: true,
      blogActions: [
        {
          name: "Search",
          url: "",
          fas: "fas fa-search",
        },
      ],
    };
  },
  components: {
    Editor,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.blog-header {
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
