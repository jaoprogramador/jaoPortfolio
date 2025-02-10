import Select from "react-select";

const options = [
  {
    value: "en",
    label: "English",
    image: "/img/icons/inglaterraBandera.png",
  },
  {
    value: "es",
    label: "Castellano",
    image: "/img/icons/espaniaBandera.png",
  },
  {
    value: "eu",
    label: "Euskera",
    image: "/img/icons/euskadiBandera.png",
  },
];

// Personaliza la opción seleccionada
const customSingleValue = ({ data }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={data.image} alt={data.label} style={{ width: 24, height: 16 }} />
    {data.label}
  </div>
);

// Personaliza el menú de opciones
const customOption = (props) => {
  const { data, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <img src={data.image} alt={data.label} style={{ width: 24, height: 16, marginRight: "10px" }} />
      {data.label}
    </div>
  );
};

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <Select
    options={options}
    value={options.find((opt) => opt.value === language)}
    onChange={(selected) => setLanguage(selected.value)}
    placeholder="Idioma"
    components={{ SingleValue: customSingleValue, Option: customOption }}
    styles={{
      control: (base) => ({
        ...base,
        display: "flex",
        alignItems: "center",
        minWidth: "120px", // Ajusta el ancho
        padding: "4px 8px", // Mejora el espaciado interno
        borderRadius: "8px",
      }),
      singleValue: (base) => ({
        ...base,
        display: "flex",
        alignItems: "center",
      }),
    }}
  
    />
  );
};

export default LanguageSelector;
