<template>
  <div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
      />
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Add a new To - Do
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <div class="mt-2">
            <input
              id="todo"
              v-model="newTask"
              name="todo"
              type="text"
              autocomplete="off"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6 text-center"
              @keypress.enter="addTask"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="addTask"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftAdd',
  data() {
    return { newTask: '' }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    },
  },
}
</script>

<style></style>
