const mediumTime = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short",
  });
  
  export const formatTime = (timeString) => {
    return mediumTime.format(new Date(timeString))
  }