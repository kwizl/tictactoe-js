const Player = (name, sym) => {
  const getName = () => name;
  const getSym = () => sym;

  return { getName, getSym };
};

/* eslint-disable import/prefer-default-export */
export { Player };
