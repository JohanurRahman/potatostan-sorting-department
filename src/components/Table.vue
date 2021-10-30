<template>
  <v-data-table height="500" :headers="headers"
                :items="users" :disable-pagination="true"
                :hide-default-footer="true">
    <template v-if="draggable" v-slot:body="props">
      <draggable :list="props.items" tag="tbody" @end="areUsersSorted(props.items)">
        <tr v-for="(user, index) in props.items" :key="index">
          <td>{{ user.email }}</td>
          <td>{{ user.potatoes }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </draggable>
    </template>
  </v-data-table>
</template>

<script>
import Draggable from "vuedraggable";

export default {
  name: "Table",
  components: {
    Draggable,
  },
  props: {
    users: {
      default: [],
      required: true,
    },
    draggable: {
      default: true
    }
  },
  data: () => ({
    headers: [
      { text: "Email", value: "email", sortable: false },
      { text: "Potatoes", value: "potatoes", sortable: false },
      { text: "Name", value: "name", sortable: false },
    ],
  }),
  methods: {
    areUsersSorted (users) {
      const sorted =  users.slice(1).every((item, i) => users[i].potatoes <= item.potatoes);
      if (sorted) {
        this.$emit('usersSorted');
      }
    }

  }
}
</script>
