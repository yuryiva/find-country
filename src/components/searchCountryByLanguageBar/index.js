import { Input, Space } from "antd";
import { Title } from "./styling";
const { Search } = Input;

const SearchCountryByLanguageBar = ({
  setSearchInput,
  findCountriesByLanguage,
  countryToDisplay,
}) => {
  const onSearch = (value) => {
    setSearchInput(value);
    findCountriesByLanguage(value);
  };

  return (
    <>
      <Title>Find country by language:</Title>
      <Space
        direction="vertical"
        style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}
      >
        <Search
          placeholder="Example: German"
          onSearch={onSearch}
          enterButton
          size={"large"}
        />
      </Space>
    </>
  );
};

export default SearchCountryByLanguageBar;
