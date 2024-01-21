import moment from 'moment';
//format UTC by moment ========>
export const formatUtcDate = (date: moment.MomentInput) => {
  const momentDate = moment.utc(date);
  const formattedDate = momentDate.format('MMMM YYYY');
  return formattedDate;
};


export const ACTIVEOPACITY = 0.7;
