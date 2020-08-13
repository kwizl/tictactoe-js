const Player = (name, sym) => {
  const getName = () => name;
  const getSym = () => sym;

  return { getName, getSym };
};

export { Player };
