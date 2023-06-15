import React, { useEffect, useState } from 'react';
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import data from "../../data/data.json";
import tinh_tp from "../../data/tinh_tp.json";
import quan_huyen from "../../data/quan_huyen.json";
import './DataList.scss'

const ContainerHeight = 900;

let getTinh = (data, tinh_tp) => {
    for(let i = 0; i < data.length; i++){
        let idTinh = data[i].city;
        let nameTinh = tinh_tp[idTinh];
        data[i].nameTinh = nameTinh.name;
    }
}

let getQuan = (data, quan_huyen) => {
  for (let i = 0; i < data.length; i++) {
    let idQuan = data[i].district;
    let nameQuan = quan_huyen[idQuan];
    data[i].nameQuan = nameQuan.name;
  }
};
getTinh(data, tinh_tp);
getQuan(data, quan_huyen)
console.log(data);

const DataList = ({ items }) => {
    const [dataList, setDataList] = useState(data);

    // const appendData = () => {
    //     const cityname = data.map((element) => {
    //       return element;
    //     });
    //     fetch(cityname)
    //       .then(function (res) {
    //         res.json();
    //       })
    //       .then((body) => {
    //         setDataList(body);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    // }

    // useEffect(() => {
    //     appendData();
    // },[]);

    const onScroll = (e) => {
        if(e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight){
            setDataList()
        }
    };

  return (
    <div className="list">
      <List className="list__room">
        <VirtualList
          data={items}
          height={ContainerHeight}
          itemHeight={47}
          className="list-virtual"
        >
          {(items) => (
            <List.Item
              style={{ justifyContent: "flex-start", alignItems: "start" }}
            >
              <div>
                <div className="list__room__image">
                  <img
                    width={200}
                    height={200}
                    alt="logo"
                    src={items.thumbnail}
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="list__room__item">
                <List.Item.Meta
                  title={
                    <a
                      href="https://phongtro123.com/"
                      className="list__room__item--title"
                    >
                      {items.title}
                    </a>
                  }
                />
                <div className="list__room__item__infor">
                  <div className="list__room__item__infor--price">
                    <p>{items.price + " triệu/tháng"}</p>
                  </div>
                  <div className="list__room__item__infor--area">
                    <div className="list__room__item__infor--area__room">
                      <h6>Diện tích:</h6>
                      <p>{items.area + "m²"}</p>
                    </div>
                    <div className="list__room__item__infor--area__regional">
                      <h6>Khu vực:</h6>
                      <p>{"Quận " + items.nameQuan}</p>
                      <p>{" , " + items.nameTinh}</p>
                    </div>
                  </div>
                  <div className="list__room__item__infor--content">
                    <p>{items.content}</p>
                  </div>
                </div>
              </div>
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
}

export default DataList
