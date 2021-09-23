export const getCurrentDate = () => {
  const date = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(date);
};
