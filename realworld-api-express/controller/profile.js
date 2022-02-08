exports.getProfiles = async (req, res, next) => {
  try {
    res.send("get profiles/:username");
  } catch (err) {
    next(err);
  }
};

exports.followProfiles = async (req, res, next) => {
  try {
    res.send("post profiles/:username/follow");
  } catch (err) {
    next(err);
  }
};

exports.deleteFollowProfiles = async (req, res, next) => {
  try {
    res.send("delete profiles/:username/follow");
  } catch (err) {
    next(err);
  }
};
