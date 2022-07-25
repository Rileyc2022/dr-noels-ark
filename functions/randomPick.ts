const randomPick = (
  arr: any
) => {
  return arr[
      Math.floor(
          Math.random() *
              arr.length
      )
  ];
};

export default randomPick;