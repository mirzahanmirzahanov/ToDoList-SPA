<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>
      <form @submit.prevent="taskCreate">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required />
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is required"></span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea" data-length="2048"></textarea>
          <label for="description">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>
        <input type="text" class="datepicker" ref="datepicker">
        <button class="btn" type="submit">Create task</button>
      </form>
    </div>
  </div>
</template>

<script>



export default {
  name: 'create',
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null
  }),
  mounted() {
  this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task tag'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  },
  methods:{
    taskCreate(){
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    }
  },
  destroyed(){
    if(this.date && this.date.destroy){
      this.date.destroy()
    }
    if(this.chips && this.chips.destroy){
      this.chips.destroy()
    }
  }
}
</script>
