import moment from "moment-timezone";

export const getTime = (time) => {
  let parsedTime = moment(time);

  let formattedTime = parsedTime.tz("Asia/Kolkata").format("hh:mm A");

  return formattedTime;
};
