import moment from "moment";

const setMoment = (date) => {
  return date ? moment(date) : undefined;
};

const getMoment = (date) => {
  if (!date) return undefined;
  return moment.isMoment(date) ? date.format() : date;
};

const displayMoment = (date) => {
  if (!date) return undefined;
  return moment.isMoment(date)
    ? date.format("DD-MM-YYYY")
    : moment(date).format("DD-MM-YYYY");
};

export { setMoment, getMoment, displayMoment };
