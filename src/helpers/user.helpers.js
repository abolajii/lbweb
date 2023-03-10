const keysAndValue = (user) => {
  const arr = [];
  for (const key in user) {
    const value = user[key];
    const firstLetter = key.charAt(0).toUpperCase();
    const restOfWord = key.slice(1);
    const newKey = firstLetter + restOfWord;

    const finalKey = newKey.replace(/_/g, " ");
    const final = finalKey.split(" ");
    const finalValue = final
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    const firstLetterOfValue = value.charAt(0).toUpperCase();
    const restOfWordOfValue = value.slice(1);
    const newValue = firstLetterOfValue + restOfWordOfValue;

    arr.push({ key: finalValue, value: newValue });
  }
  return arr;
};

const dateOfBirth = (dob) => {
  if (!dob) return;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[Number(dob.split("-")[0]) - 1];

  const day = dob.split("-")[1];
  const year = dob.split("-")[2];
  return `${month} ${day} ${year}`;
};

const findInterests = (interests, myIn) => {
  if (!myIn) return null;
  const myInterest = interests.filter((interest) => {
    return myIn.includes(Number(interest.id));
  });

  return myInterest;
};

export { findInterests, dateOfBirth, keysAndValue };
