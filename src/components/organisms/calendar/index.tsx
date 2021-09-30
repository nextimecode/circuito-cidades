import React from 'react'
import { Calendar, DateObject } from 'react-multi-date-picker'
import 'react-multi-date-picker/styles/colors/red.css'
import portugueseLowercase from '../../../utils/calendar_language'
import { dates } from '../../../pages/api/dates'

export default function Example() {
  return (
    <Calendar
      locale={portugueseLowercase}
      className="red"
      value={dates}
      readOnly
      currentDate={
        new DateObject()}
    />
  )
}
