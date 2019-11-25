<template>
  <div>
    <b-field label="Select a date">
      <b-datepicker :show-week-number="showWeekNumber" placeholder="Click to select..." icon="calendar-today"></b-datepicker>
    </b-field>
    <br />
    <b-table :data="data" :columns="columns" focusable></b-table>
  </div>
</template>

<script>
export default {
  name: 'dailyLog',
  data() {
    const data = [
      { sn: 1, full_name: 'Jesse J', time_in: '07:05', time_out: '17:05' },
      { sn: 2, full_name: 'John Snow', time_in: '07:20', time_out: '17:05' },
      { sn: 3, full_name: 'Tina Turner', time_in: '07:22', time_out: '17:05' },
      {
        sn: 4,
        full_name: 'Clarence Peter',
        time_in: '07:24',
        time_out: '17:05'
      },
      { sn: 5, full_name: 'Anne Idibia', time_in: '07:26', time_out: '17:05' }
    ]

    return {
      data,
      columns: [
        {
          field: 'sn',
          label: 'S/N',
          width: '40',
          numeric: true
        },
        {
          field: 'full_name',
          label: 'Full Name'
        },

        {
          field: 'time_in',
          label: 'Time In',
          centered: true
        },
        {
          field: 'time_out',
          label: 'Time Out',
          centered: true
        }
      ]
    }
  }
}
</script>

<style scoped></style>
