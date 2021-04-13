import { Input, Space } from "antd";
import { Title } from "./styling";
const { Search } = Input;

const SearchCountryByNameBar = ({ setSearchInput, findCountryByName }) => {
  const onSearch = (value) => {
    setSearchInput(value);
    findCountryByName(value);
  };

  return (
    <>
      <Title>Find country by name:</Title>
      <Space
        direction="vertical"
        style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}
      >
        <Search
          placeholder="Example: France"
          onSearch={onSearch}
          enterButton
          size={"large"}
        />
      </Space>
    </>
  );
};

export default SearchCountryByNameBar;
