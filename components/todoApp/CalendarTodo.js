import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarTodo({ onDate }) {
  return (
    <Calendar
      current={"2021-07-21"}
      minDate={"2021-07-21"}
      onDayPress={(day) => {
        return onDate(day);
      }}
      onDayLongPress={(day) => {
        return onDate(day);
      }}
      monthFormat={"MM yyyy"}
      disableAllTouchEventsForDisabledDays={true}
      renderHeader={(date) => {
        return (
          <View key={date}>
            <Text>{date.toString("MMM yyyy")}</Text>
          </View>
        );
      }}
      enableSwipeMonths={true}
    />
  );
}
