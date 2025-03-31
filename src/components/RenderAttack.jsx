import AttackEnergy from "./AttackEnergy";

export default function RenderAttack(props) {
  const attacks = [...props.attacks];
  return attacks.map((el, i) => (
    <div key={i}>
      <div>
        {el.costs && (
          <div className="card-image-wrapper">
            <AttackEnergy costs={el.costs} />
          </div>
        )}
        <div className="card-attack-name">
          <h3>{el.name}</h3>
          {el.value && <h3>{el.value}</h3>}
        </div>
      </div>
      {el.description && <p>{el.description}</p>}
    </div>
  ));
}

//   const wrapperDiv = document.createElement("div");

//   const headerDiv = document.createElement("div");
//   const imageDiv = document.createElement("div");
//   imageDiv.classList.add("card-image-wrapper");
//   //   Add images to attacks if needed
//   if (obj.costs) {
//     obj.costs.forEach((el) => {
//       for (let i = 0; i < el.amount; ++i) {
//         const imageEl = document.createElement("img");
//         imageEl.src = `${process.env.PUBLIC_URL}/energies/${el.type}_energy.png`;
//         imageEl.alt = "";
//         imageEl.height = "24";
//         imageEl.width = "24";
//         imageDiv.append(imageEl);
//       }
//     });
//     headerDiv.append(imageDiv);
//   }
//   //   Create Name
//   const nameDiv = document.createElement("div");
//   nameDiv.classList.add("card-attack-name");

//   const h3El = document.createElement("h3");
//   h3El.textContent = obj.name;
//   nameDiv.append(h3El);

//   if (obj.value) {
//     const h3Value = document.createElement("h3");
//     h3Value.textContent = obj.value;
//     nameDiv.append(h3Value);
//   }

//   headerDiv.append(nameDiv);

//   //   Add Div to Wrapper
//   wrapperDiv.append(headerDiv);

//   // If Attack has description
//   if (obj.description) {
//     const pEl = document.createElement("p");
//     pEl.textContent = obj.description;
//     wrapperDiv.append(pEl);
//   }

//   return wrapperDiv;
// }
