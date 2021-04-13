import { Input, Space } from "antd";
import { Title } from "./styling";
const { Search } = Input;

const SearchCountryByPhoneCodeBar = ({
  setSearchInput,
  findCountryByPhoneCode,
}) => {
  const onSearch = (value) => {
    setSearchInput(value);
    findCountryByPhoneCode(value);
  };

  return (
    <>
      <Title>Find country by phone code:</Title>
      <Space
        direction="vertical"
        style={{ width: "90%", marginLeft: "5%", marginBottom: "5%" }}
      >
        <Search
          placeholder="Example: 370"
          onSearch={onSearch}
          enterButton
          size={"large"}
        />
      </Space>
    </>
  );
};

export default SearchCountryByPhoneCodeBar;
