import React from "react";
import "antd/dist/antd.css";

import { Menu } from "antd";
import { CheckOutlined, UnorderedListOutlined } from "@ant-design/icons";

import { SidebarContainer } from "./styling";
import { v4 as uuid_v4 } from "uuid";
import SearchCountryByNameBar from "../searchCountryByNameBar";
import SearchCountryByLanguageBar from "../searchCountryByLanguageBar";
import SearchCountryByCodeBar from "../searchCountryByCodeBar";
import SearchCountryByPhoneCodeBar from "../searchCountryByPhoneCodeBar";

const { SubMenu } = Menu;

const Sidebar = ({
  getCountriesOnContinent,
  allContinentsCopy,
  searchInput,
  setSearchInput,
  findCountryByName,
  findCountryByCode,
  findCountriesByLanguage,
  findCountryByPhoneCode,
  countryToDisplay,
}) => {
  return (
    <SidebarContainer>
      <Menu
        style={{ width: 380, backgroundColor: "rgb(246, 171, 171,0.6)" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
      >
        <SubMenu
          key={uuid_v4()}
          icon={<UnorderedListOutlined style={{ fontSize: "85%" }} />}
          title="Select a continent"
          style={{ fontWeight: "bold", fontSize: "25px" }}
        >
          {allContinentsCopy.map((element) => {
            return (
              <Menu.Item
                key={uuid_v4()}
                onClick={() => getCountriesOnContinent(element.code)}
                style={{ fontSize: "20px" }}
              >
                <CheckOutlined />
                {element.name}
              </Menu.Item>
            );
          })}
        </SubMenu>

        <SearchCountryByNameBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          findCountryByName={findCountryByName}
        />

        <SearchCountryByCodeBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          findCountryByCode={findCountryByCode}
        />

        <SearchCountryByLanguageBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          findCountriesByLanguage={findCountriesByLanguage}
          countryToDisplay={countryToDisplay}
        />

        <SearchCountryByPhoneCodeBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          findCountryByPhoneCode={findCountryByPhoneCode}
        />
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
