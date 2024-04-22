export const getProfilePicString = (username, gender) => {
  let newGen;
  if (gender == "male") {
    newGen = "boy";
  } else {
    newGen = "girl";
  }
  const url = `https://avatar.iran.liara.run/public/${newGen}?username=${username}`;
  return url;
};
