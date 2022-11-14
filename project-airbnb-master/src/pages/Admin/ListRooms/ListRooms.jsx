import {
  layDanhSachPhongTheoTenPhongAction,
  xoaPhongAction,
} from "../../../redux/actions/QuanLyPhongAction";
import React, { memo, useEffect, Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { NavLink } from "react-router-dom";
import "./ListRooms.scss";


export default function ListRooms(props) {

  const [searchText, setSearchText] = useState("");

  const [searchedColumn, setSearchedColumn] = useState("");

  const searchInput = useRef(null);

  const { danhSachPhongTheoTenPhong } = useSelector(
    (state) => state.QuanLyPhongReducer
  );

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          type={dataIndex === "rating" ? "number" : "text"}
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText({
      searchText: selectedKeys[0],
    });
    setSearchedColumn({
      searchedColumn: dataIndex,
    });
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText({ searchText: "" });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhongTheoTenPhongAction();
    dispatch(action);
  }, []);

  const { Search } = Input;

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: (text, object) => {
        return (
          <Fragment>
            <img src={text} atl="..." width={"100%"} />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "",
      dataIndex: "_id",
      render: (text, object) => {
        return (
          <Fragment>
            <NavLink
              to={`/admin/listrooms/updateimage/${text}`}
              className="ml-3 text-primary"
              title="Update image"
            >
              <i class="text-primary fa fa-edit"></i>
            </NavLink>
          </Fragment>
        );
      },
      width: "2.5%",
    },
    {
      title: "Room name",
      dataIndex: "name",
      value: (text, object) => {
        return <span style={{ textAlign: "justify" }}>{object}</span>;
      },
      ...getColumnSearchProps("name"),
      width: "25%",
    },
    {
      title: "Sub type",
      dataIndex: "subType",
      render: (text, object) => {
        return <span>{object.subType.name}</span>;
      },
      width: "17.5%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (text, object) => {
        return <span>{text}</span>;
      },
      ...getColumnSearchProps("rating"),
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, object) => {
        return <span>{text}</span>;
      },
      width: "9%",
    },
    {
      title: "Pro Service",
      dataIndex: "proServices",
      render: (text, object) => {
        return (
          <span>
            {object.proServices === true ? <i class="text-success fa fa-check"></i> : ""}
          </span>
        );
      },
      width: "11%",
    },

    {
      title: "",
      dataIndex: "_id",
      render: (text, object, index) => {
        return (
          <Fragment key={index} className="flex items-center">
            <NavLink
              to={`/admin/listrooms/editroom/${text}`}
              className="ml-3 text-primary"
              title="Edit room"
            >
              <i class="text-primary fa fa-user-edit"></i>
            </NavLink>

            <span
              className="ml-3 text-danger"
              style={{ cursor: "pointer" }}
              title="Delete room"
              onClick={() => {
                // Gọi action xóa
                if (
                  window.confirm("Are you sure you want to delete this room?")
                ) {
                  dispatch(xoaPhongAction(object._id));
                }
              }}
            >
              <i class="text-danger fa fa-trash-alt"></i>
            </span>
          </Fragment>
        );
      },
      sortDirections: ["descend", "ascend"],
      width: "10%",
    },
  ];

  // Lọc bỏ các phòng không có đủ dữ liệu
  const danhSachPhongTheoTenPhongFilter =
    danhSachPhongTheoTenPhong.filter(
      (room) =>
        room.subType !== null && room.image && room.rating && room.price && room.name
    );

  // Gán lại data
  const data = danhSachPhongTheoTenPhongFilter;

  // Hàm tìm kiếm
  const onSearch = (value) => {
    dispatch(layDanhSachPhongTheoTenPhongAction(value));
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  // Kiểm tra trong localStorage nếu không phải admin thì chuyển về trang profile
  // if (userLogin.maLoaiNguoiDung !== "QuanTri") {
  //   alert("Bạn không có quyền truy cập vào trang này !");
  //   return <Redirect to="/admin/profile" />;
  // }

  return (
    <div id="listRooms">
      <h2 className="mb-5">List rooms</h2>
      <div title="Click to add new room" className="mb-4">
        <NavLink
          to="/admin/listrooms/addnewroom"
          className="add-account-button"
        >
          Add new room
        </NavLink>
      </div>

      <Search
        className="mb-3"
        placeholder="Enter room name"
        // Nếu bỏ enterButton sẽ hiện kính lúp
        enterButton="Search"
        size="large"
        // suffix là search giọng nói
        // suffix={suffix}
        onSearch={onSearch}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
