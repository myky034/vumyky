import React, { useState } from "react";
import tinh_tp from "../../data/tinh_tp.json";
import quan_huyen from "../../data/quan_huyen.json";
import mucgia from "../../data/mucgia.json";
import dientich from "../../data/dientich.json";
import data from "../../data/data.json";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './Search.scss';

var obj = Object.entries(tinh_tp);
var obj2 = Object.entries(quan_huyen);

const Search = ({ filterItem, setItems }) => {
    const [district, getDistrict] = useState([]);
    const [search, setSearch] = useState("");

    const handleFilter = (e) => {
        const getValueFilter = e.target.value;
        setSearch(e.target.value);
        console.log(getValueFilter);
    }

  const handleCountry = (e) => {
    const getCountryCode = e.target.value;
    console.log(getCountryCode);
    const countryCode = Object.entries(quan_huyen).filter(
      ([key, obj]) => obj.parent_code === getCountryCode
    );
    console.log(countryCode)
    getDistrict(countryCode);
    setSearch(getCountryCode);
  }

  return (
    <div className="search">
      <div className="search__container">
        <div className="search__container--tinh-thanh">
          <label
            for="countries"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Tỉnh thành
          </label>
          <Form.Select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleCountry}
          >
            <option value="" selected>
              -- Tỉnh thành --
            </option>
            {obj.map(([id, { name, code }]) => (
              <>
                <option key={id} value={code}>
                  {name}
                </option>
              </>
            ))}
          </Form.Select>
        </div>

        <div className="search__container--quan-huyen">
          <label
            for="quan-huyen"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Quận huyện
          </label>
          <Form.Select
            id="quan-huyen"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFilter}
          >
            <option value="" selected>
              -- Quận/huyện --
            </option>
            {district.map(([id, { name }]) => (
              <>
                <option key={id} value={name}>
                  {"Quận " + name}
                </option>
              </>
            ))}
          </Form.Select>
        </div>

        <div className="search__container--mucgia">
          <label
            for="mucgia"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Khoảng giá
          </label>
          <Form.Select
            id="mucgia"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFilter}
          >
            <option value="" selected>
              -- Chọn mức giá --
            </option>
            {mucgia.mucgia.map((item, index) => (
              <>
                <option key={index} value={item.content}>
                  {item.content}
                </option>
              </>
            ))}
          </Form.Select>
        </div>

        <div className="search__container--dientich">
          <label
            for="dientich"
            class="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Diện tích
          </label>
          <Form.Select
            id="dientich"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleFilter}
          >
            <option value="" selected>
              -- Chọn diện tích --
            </option>
            {dientich.dientich.map((item, index) => (
              <>
                <option key={index} value={item.content}>
                  {item.content}
                </option>
              </>
            ))}
          </Form.Select>
        </div>

        <div className="search__container__btn--submit">
          <Button type="submit" onClick={() => filterItem(search)}>
            Lọc tin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
