export const getForm = state => state.books;

export const getBooksFetching = state => {
  const form = getForm(state);

  return form.isFetching;
};

export const getBooksPayload = state => {
  const form = getForm(state);

  return form.payload;
};

export const getBooksError = state => {
  const form = getForm(state);

  return form.error;
};
