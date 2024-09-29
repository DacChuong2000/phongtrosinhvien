import React, { useState } from "react"
import { Button } from ".."
import { LuLogIn } from "react-icons/lu"
import { BiSolidUserPlus } from "react-icons/bi"
import { AiOutlineLogout, AiOutlinePlusCircle, AiOutlineUser } from "react-icons/ai"
import withBaseTopping from "@/hocs/withBaseTopping"
import path from "@/ultils/path"
import { useSelector } from "react-redux"
import { GrUserAdmin } from "react-icons/gr"
import { logout } from "@/redux/userSlice"

const Header = ({ navigate, dispatch }) => {
  const { token, current } = useSelector((state) => state.user)
  const [isShowMenu, setIsShowMenu] = useState(false)
  return (
    <section className="w-main mx-auto h-[90px] flex justify-between items-center">
      <img src="/logo.png" alt="logo" className="h-[55px] object-contain" />
      <div className="flex items-center">
        <>
          {token && (
            <div className="flex items-center mr-4 relative">
              {isShowMenu && (
                <div className="absolute z-30 top-full right-0 min-w-[150px] rounded-md bg-white drop-shadow border flex flex-col">
                  {+current?.role === 1010 && (
                    <span
                      onClick={() => navigate(`${path.ADMIN}/${path.DASHBOARD}`)}
                      className="p-3 hover:font-semibold hover:text-main-blue hover:bg-gray-50 flex items-center gap-2 cursor-pointer border-b"
                    >
                      <GrUserAdmin />
                      Admin
                    </span>
                  )}
                  <span
                    onClick={() => navigate(`${path.MEMBER}/${path.PERSONAL}`)}
                    className="p-3 hover:font-semibold hover:text-main-blue hover:bg-gray-50 flex items-center gap-2 cursor-pointer border-b"
                  >
                    <AiOutlineUser />
                    Thành viên
                  </span>
                  <span
                    onClick={() => dispatch(logout())}
                    className="p-3 hover:font-semibold hover:text-main-blue hover:bg-gray-50 flex items-center gap-2 cursor-pointer border-b"
                  >
                    <AiOutlineLogout />
                    Đăng xuất
                  </span>
                </div>
              )}
              <span className="px-4">
                Xin chào, <span className="font-bold">{current?.name}!</span>
              </span>
              <Button onClick={() => setIsShowMenu(!isShowMenu)}>Quản lý</Button>
            </div>
          )}
          {!token && (
            <>
              <Button
                onClick={() => navigate(`${path.LOGIN}`, { state: { mode: "REGISTER" } })}
                textColor="text-gray-900"
                bgColor="bg-transparent hover:underline text-base"
              >
                <LuLogIn size={18} />
                <span>Đăng ký</span>
              </Button>
              <Button
                onClick={() => navigate(`${path.LOGIN}`, { state: { mode: "LOGIN" } })}
                textColor="text-gray-900"
                bgColor="bg-transparent hover:underline text-base"
              >
                <BiSolidUserPlus size={22} />
                <span>Đăng nhập</span>
              </Button>
            </>
          )}
        </>
        <Button onClick={() => navigate(`${path.MEMBER}/${path.CREATE_POST}`)} bgColor="bg-main-pink text-base">
          <span>Đăng tin mới</span>
          <AiOutlinePlusCircle size={18} />
        </Button>
      </div>
    </section>
  )
}

export default withBaseTopping(Header)
