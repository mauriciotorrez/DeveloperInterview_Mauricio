const SET_COMPANY_NAME = 'SET_COMPANY_NAME';

export const setCompanyName = (payload: string) => ({
  type: SET_COMPANY_NAME,
  payload,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  SET_COMPANY_NAME,
};
