const dummyRequest = (mockResult = null, timeout = 1000, fail = false) => {
  return new Promise((resolve, reject) => {
    let method = fail
      ? reject.bind(null, new Error(mockResult))
      : resolve.bind(null, mockResult);
    setTimeout(() => method(), timeout);
  });
};

export { dummyRequest };
