export const toddmonthyyyy = (date) => {
  const datee = new Date(date).getDate()
  const month = new Date(date).toLocaleString('en-US', { month: 'short' });
  const year = new Date(date).getFullYear()
  return datee + ". " + month + ". " + year;
}

export const getTime = (date) => {
  return new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

export const parseISODate = (isoDate) => {
  return isoDate.split("T")[0];
}

export const parseISOWithTime = (isoDate) => {
  return isoDate.split("T")[0] + "T" + new Date(isoDate).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
}