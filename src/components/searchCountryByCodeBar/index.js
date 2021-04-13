import { Input, Space } from "antd";
import { Title } from "./styling";
const { Search } = Input;

const SearchCountryByCodeBar = ({ setSearchInput, findCountryByCode }) => {
  const onSearch = (value) => {
    setSearchInput(value);
    findCountryByCode(value);
  };

  return (
    <>
      <Title>Find country by code:</Title>
      <Space
        direction="vertical"
        style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}
      >
        <Search
          placeholder="Example: FR"
          onSearch={onSearch}
          enterButton
          size={"large"}
        />
      </Space>
    </>
  );
};

export default SearchCountryByCodeBar;
