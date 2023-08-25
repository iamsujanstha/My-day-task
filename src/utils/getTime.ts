import moment from "moment";

export const getTime = (date: string) => {
  const now = moment();
  const then = moment(date);
  const seconds = now.diff(then, "seconds");
  const minutes = now.diff(then, "minutes");
  const hours = now.diff(then, "hours");
  const days = now.diff(then, "days");

  if (seconds < 60) {
    return `${seconds === 1 ? "a second" : seconds + " seconds"} ago`;
  } else if (minutes < 60) {
    return `${minutes === 1 ? "a minute" : minutes + " minutes"} ago`;
  } else if (hours < 24) {
    return `${hours === 1 ? "an hour" : hours + " hours"} ago`;
  } else if (days <= 7) {
    return `${days === 1 ? "a day" : days + " days"} ago`;
  } else if (days <= 13) {
    return "a week ago";
  } else {
    const weeks = Math.floor(days / 7);
    return `${weeks} weeks ago`;
  }
};
