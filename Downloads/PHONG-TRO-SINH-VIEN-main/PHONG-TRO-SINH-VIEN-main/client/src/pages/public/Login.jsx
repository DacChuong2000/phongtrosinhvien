import React, { useCallback, useEffect, useState } from "react"
import { InputForm, Button, OtpVerify } from "@/components"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"
import * as actions from "@/redux/actions"
import withBaseTopping from "@/hocs/withBaseTopping"
import BACKGROUND from "@/assets/motel.jpg"
import { auth } from "@/ultils/firebase.config"
import { toast, Toaster } from "react-hot-toast"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { apiLogin } from "@/apis/user"
import { login } from "@/redux/userSlice"
import { useSearchParams } from "react-router-dom"

const Login = ({ navigate, dispatch, location }) => {
  const { token, message } = useSelector((state) => state.user)
  const [searchParams] = useSearchParams()
  const [variant, setVariant] = useState(() => location.state?.mode || "LOGIN")
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm()
  const [showOpt, setShowOpt] = useState(false)
  const [loading, setLoading] = useState(false)
  const [payload, setPayload] = useState(null)
  useEffect(() => {
    reset()
  }, [variant])
  useEffect(() => {
    if (message) Swal.fire("Oops!", message, "error").then(() => dispatch(actions.clearMessage()))
  }, [message])

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log(response)
          onSignup()
        },
        "expired-callback": () => {},
      })
    }
  }
  const onSignup = ({ phone, name, password }) => {
    setLoading(true)
    onCaptchVerify()
    const appVerifier = window.recaptchaVerifier
    const formatPh = "+84" + phone
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult
        setLoading(false)
        setShowOpt(true)
        setPayload({ phone, name, password })
        toast.success("OTP sended successfully!")
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const onSubmit = async (payload) => {
    const { name, ...data } = payload
    if (variant === "LOGIN") {
      const response = await apiLogin(data)
      if (response.success) {
        searchParams.get("redirect") ? navigate(searchParams.get("redirect")) : navigate("/")
        dispatch(login({ token: response.token }))
      } else toast.error(response.mes)
    }
    if (variant === "REGISTER") {
      onSignup(payload)
    }
  }
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") setVariant("REGISTER")
    else setVariant("LOGIN")
  }, [variant])
  useEffect(() => {
    if (token) navigate("/")
  }, [token])
  return (
    <>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container" />
      <div className="w-full h-screen grid grid-cols-2 relative">
        {showOpt && (
          <div
            onClick={() => setShowOpt(false)}
            className="absolute inset-0 bg-overlay-70 h-screen flex items-center justify-center"
          >
            <OtpVerify
              payload={payload}
              setShowOtp={setShowOpt}
              loading={loading}
              setLoading={setLoading}
              setVariant={setVariant}
            />
          </div>
        )}
        <div className="col-span-1 flex justify-center items-center">
          <img src={BACKGROUND} alt="avatar" className="w-3/5 object-contain" />
        </div>
        <div className="col-span-1 gap-10 flex flex-col items-center pr-20 justify-center">
          <h1 className="text-5xl font-bold tracking-tighter text-main-blue">phongtrosinhvien</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-lg inset-0 p-8 border flex flex-col gap-6 w-[500px]"
          >
            <h2 className="text-3xl tracking-tight font-bold m-auto pb-4">
              {variant === "LOGIN" ? "Đăng nhập" : "Tạo tài khoản"}
            </h2>
            <InputForm
              label="Số điện thoại"
              register={register}
              errors={errors}
              id="phone"
              validate={{
                required: "Trường này không được bỏ trống.",
                maxLength: {
                  value: 10,
                  message: "Số điện thoại không hợp lệ",
                },
                minLength: {
                  value: 5,
                  message: "Số điện thoại không hợp lệ",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Số điện thoại không hợp lệ",
                },
              }}
              placeholder="Nhập số điện thoại liên hệ"
              fullWidth
            />
            <InputForm
              label="Mật khẩu"
              register={register}
              errors={errors}
              id="password"
              validate={{
                required: "Trường này không được bỏ trống.",
                minLength: {
                  value: 6,
                  message: "Mật khẩu bắt buộc tối thiểu 6 ký tự.",
                },
              }}
              type="password"
              fullWidth
              placeholder="Mật khẩu tối thiểu 6 ký tự"
            />
            {variant === "REGISTER" && (
              <InputForm
                label="Tên của bạn"
                register={register}
                errors={errors}
                id="name"
                validate={{ required: "Trường này không được bỏ trống." }}
                fullWidth
                placeholder={"Họ và tên của bạn"}
              />
            )}
            <Button type="submit" fullWidth>
              {variant === "LOGIN" ? "Đăng nhập" : "Đăng ký tài khoản"}
            </Button>
            <div className="flex gap-2 text-sm">
              <span>{variant === "LOGIN" ? "Bạn chưa có tài khoản?" : "Đã có tài khoản?"}</span>
              <span className="text-main-blue  cursor-pointer hover:underline" onClick={toggleVariant}>
                {variant === "LOGIN" ? "Tạo tài khoản" : "Đi tới đăng nhập"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default withBaseTopping(Login)