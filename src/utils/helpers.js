export function getInitials(fullName) {
  if (!fullName) {
    return "";
  }
  const nameArray = fullName.trim().split(/\s+/);
  const initials = nameArray
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  return initials;
}

export function generateRandomString() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
