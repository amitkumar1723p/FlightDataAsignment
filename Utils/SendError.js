//  This Function Send All The Error

export const SendError = (res, status, success, message, error) => {
  if (error) {
    // In this function we have written a basic error handling code

    if (error.name === "CastError") {
      let message = `${error.value} not Found . Invalid ${error.path}`;
      return res.status(400).json({ message, success: false });
    } else if (error.code) {
      const message = `Deplicate key Error`;
      return res.status(400).json({ message, success: false });
    } else {
      return res.status(status).json({ message: error.message, success });
    }
  } else {
    return res.status(status).json({ message, success });
  }
};
