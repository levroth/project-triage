var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('dummyData.php')
      .then( response => response.json())
      .then( json => {waitingApp.patients = json});

    }
  },
  created() {
    this.fetchPatients();
  }
})
