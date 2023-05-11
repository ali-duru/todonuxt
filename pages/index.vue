<template>
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10 place-items-stretch gap-4 h-screen"
  >
    <LeftAdd
      class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
    />
    <div class="flex w-full gap-10 justify-center mt-10 flex-wrap">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>
