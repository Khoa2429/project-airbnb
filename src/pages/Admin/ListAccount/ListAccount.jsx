import {
  layDanhSachNguoiDungAction,
  xoaNguoiDungAction,
} from "../../../redux/actions/QuanLyNguoiDungAction";
import React, { memo, useEffect, Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./ListAccount.scss";

export default function ListAccount(props) {

  const [searchText, setSearchText] = useState("");

  const [searchedColumn, setSearchedColumn] = useState("");

  const searchInput = useRef(null);

  const { danhSachTaiKhoan } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachNguoiDungAction();
    dispatch(action);
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          type={dataIndex === "phone" ? "number" : "text"}
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

  const { Search } = Input;

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      render: (text, object) => {
        return (
          <Fragment>
            <img src={text} atl="avatar-img" width={"100%"} />
          </Fragment>
        );
      },

      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text, object) => {
        if (text === true) {
          return <span>Male</span>;
        } else {
          return <span>Female</span>;
        }
      },
      width: "10%",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      render: (text, object) => {
        return <span>{moment(text).format("DD/MM/YYYY")}</span>;
      },
      width: "12.5%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      ...getColumnSearchProps("phone"),
      width: "12.5%",
    },
    {
      title: "Email",
      dataIndex: "email",
      ...getColumnSearchProps("email"),
      width: "15%",
    },

    {
      title: "Role",
      dataIndex: "role",
      render: (text, object) => {
        if (text === "CLIENT") {
          return <span>Client</span>;
        }
        if (text === "ADMIN") {
          return <span>Admin</span>;
        }
      },
      ...getColumnSearchProps("role"),
      width: "10%",
    },
    {
      title: "",
      dataIndex: "_id",
      render: (text, object, index) => {
        return (
          <Fragment key={index} className="flex items-center">
            <NavLink
              to={`/admin/listaccount/editaccount/${text}`}
              className="ml-3 text-primary"
              title="Edit account"
            >
              <i class="text-primary fa fa-edit"></i>
            </NavLink>

            <span
              className="ml-3 text-danger"
              style={{ cursor: "pointer" }}
              title="Delete account"
              onClick={() => {
                // Gọi action xóa
                if (
                  window.confirm(
                    "Are you sure you want to delete this account?"
                  )
                ) {
                  dispatch(xoaNguoiDungAction(object._id));
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

  // Gán lại data
  const data = danhSachTaiKhoan;

  const onSearch = (value) => {
    dispatch(layDanhSachNguoiDungAction(value));
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
    <div id="listAccount">
      <h2 className="mb-5">List Accounts</h2>
      <div title="Click to add new account" className="mb-4">
        <NavLink
          to="/admin/listaccount/addnewaccount"
          className="add-account-button"
        >
          Add new account
        </NavLink>
      </div>

      <Search
        className="mb-3"
        placeholder="Enter name of user"
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
