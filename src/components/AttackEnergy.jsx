export default function AttackEnergy(props) {
  const costs = props.costs;
  return costs.map((el, i) => {
    return Array.from({ length: el.amount }).map((_, j) => (
      <img
        src={process.env.PUBLIC_URL + `/images/energies/${el.type}_energy.png`}
        alt=""
        key={`${i}-${j}`}
        height={24}
        width={24}
      />
    ));
  });
}
