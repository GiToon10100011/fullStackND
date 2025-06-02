import handleError from "./handleError";

const apiWrapper = async (fn, context) => {
  try {
    return await fn();
  } catch (err) {
    handleError(err, context);
    return null;
  }
};

export default apiWrapper;
