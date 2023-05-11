<template>
  <div
    class="flex flex-col h-80 justify-between text-center p-5 w-64 overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
    :class="`task ${task.done ? 'bg-gray-200' : ''}`"
  >
    <div :class="`task ${task.done ? 'line-through' : ''}`">
      {{ task.content }}
    </div>
    <div>
      <div class="flex-1 justify-around w-full">
        <button
          class="rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="toggleDone"
        >
          {{ task.done ? 'Undone' : 'Done' }}
        </button>
        <button
          class="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="removeTask"
        >
          Delete
        </button>
      </div>
      <button
        class="rounded-md mt-2 w-full border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="detail"
      >
        Details
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTask',
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task)
    },
    detail() {
      console.log(this.task.content)
    },
  },
}
</script>

<style></style>
