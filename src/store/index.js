import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find((t) => t.id === id)
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, { id, description, date }) {
      const tasks2 = state.tasks.concat()

      const indx = tasks2.findIndex(t => t.id === id)
      const task = tasks2[indx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'

      tasks2[indx] = { ...task, date, description, status }
      
      state.tasks = tasks2

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    updateTask({ commit }, task) {
      commit('updateTask', task)
    }
  },
  modules: {
  }
})
