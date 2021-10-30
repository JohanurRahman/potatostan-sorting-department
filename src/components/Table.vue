<template>
  <v-data-table height="500" :headers="headers"
                :items="user" :disable-pagination="true"
                :hide-default-footer="true">
    <template v-slot:body="props">
      <draggable :list="props.items" tag="tbody">
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
    user: {
      default: [],
      required: true,
    },
  },
  data: () => ({
    headers: [
      { text: "Email", value: "email", sortable: false },
      { text: "Potatoes", value: "potatoes", sortable: false },
      { text: "Name", value: "name", sortable: false },
    ],
  })
}
</script>
