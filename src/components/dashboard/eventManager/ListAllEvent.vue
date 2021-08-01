<template>
  <div class="px-5">
      <!-- LOADER -->
        <spinner v-if="!dataLoaded" />

    <table v-if="dataLoaded" class="table table-hover">
      <thead class="table-dark">
        <tr>
          <th scope="col">Event ID</th>
          <th scope="col">Title</th>
          <th scope="col">Created</th>
          <th scope="col">Event Date</th>
          <th scope="col">Venue</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row" v-for="item in Events" :key="item">
          <th scope="row">{{item.event_id}}</th>
          <td>{{item.title}}</td>
          <td>{{item.created}}</td>
          <td>{{item.scheduled_date}}</td>
          <td>{{item.venue}}</td>
          <td v-if="item.ended">Closed</td>
          <td v-else>To be held</td>     

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import spinner from "@/components/utilities/spinner.vue"
export default {
  created() {
    let events;
    axios
      .get("/api/events/find")
      .then((res) => {
        events = res.data.events;
        console.log(events);
        this.Events = events;
        this.dataLoaded = true;
      })
      .catch((err) => {
        alert(err);
      });
  },
  data() {
      return {
          Events: [],
          dataLoaded : false,
      }
  },
  components: {
      spinner,
  },
};
</script>

<style lang="scss" scoped>
    .table{
        font-size: 12px;
    }

    .table-row{
            border-left: 3px solid transparent;
            transition: .2s ease ;
        &:hover{
            border-left: 3px solid #F9BB0F;
        }
    }
</style>
