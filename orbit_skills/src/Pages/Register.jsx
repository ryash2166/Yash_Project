import React, { useRef } from "react";
import { Visibility, VisibilityOff, Watch } from "@mui/icons-material";
import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { t, i18n } = useTranslation();

  const locales = {
    en: { title: "English" },
    in: { title: "Indonesian" },
  };

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[##f2f6f9] py-10">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl w-full mx-auto">
          <div className="gap-6 p-6 sm:p-12 mx-auto bg-white rounded-lg shadow-lg my-auto border border-gray">
            <img
              src="https://dev.orbitaccount.id/images/Logo.png"
              alt="Logo"
              className="mb-5 sm:mb-8 md:visible invisible h-8 mx-auto"
            />
            <h3 className="text-2xl font-bold text-center">
              {t("main.Regi")}
              <span className="text-[#40b5e8] ml-1">{t("main.SSO")}</span>
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 font-normal text-center mx-auto">
              To create account, please enter your details below and click on
              <b>Continue</b>.
            </p>
            <form action="">
              <div className="grid gap-4 mt-6">
                <div className="w-full text-left">
                  <label className="relative block mb-2 text-sm font-medium text-black">
                    {t("main.first_name")}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder={t("main.PF")}
                    className="bg-white focus:outline-none px-5 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-[#40b5e8] transition border border-gray rounded-md undefined"
                  />
                </div>
                <div className="w-full text-left">
                  <label className="relative block mb-2 text-sm font-medium text-black">
                    {t('main.last_name')}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder={t("main.PL")}
                    className="bg-white focus:outline-none px-5 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-[#40b5e8] transition border border-gray rounded-md undefined"
                  />
                </div>
                <div className="w-full text-left">
                  <label
                    className="relative block mb-2 text-sm font-medium text-black"
                  >
                    {t('main.Phone')}
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="number"
                    placeholder={t("main.Phone_holder")}
                    className="bg-white focus:outline-none px-5 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-[#40b5e8] transition border border-gray rounded-md undefined"
                  />
                </div>
                <div className="w-full text-left ">
                  <label className="relative block mb-2 text-sm font-medium text-black">
                    {t("main.email")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder={t("main.PE")}
                    className="bg-white focus:outline-none px-5 py-2.5 text-sm placeholder:text-mute w-full outline-none focus:border focus:border-[#40b5e8] transition border border-gray rounded-md undefined"
                  />
                </div>
                <div>
                  <div className="w-full text-left">
                    <label className="relative block mb-2 text-sm font-medium text-black">
                      {t("main.Password")}
                      <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type={values.showPassword ? "text" : "password"}
                      placeholder={t("main.PP")}
                      className=" bg-white focus:outline-none px-5 py-2.5  text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md "
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </div>
                  <ul className="text-[10px] mt-2 mb-2 ml-5 text-left list-disc">
                    <li className="text-xs text-gray-400">
                      {t('main.P1')}
                    </li>
                    <li className="text-xs text-gray-400">
                      {t('main.P2')}
                    </li>
                    <li className="text-xs text-gray-400">
                      {t('main.P3')}
                    </li>
                  </ul>
                </div>
                <div className="w-full text-left">
                  <label className="relative block mb-2 text-sm font-medium text-black">
                    {t("main.Confirm")} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder={t("main.PCP")}
                    className=" bg-white focus:outline-none px-5 py-2.5  text-sm placeholder:text-mute w-full outline-none focus:border focus:border-primary transition border border-gray rounded-md "
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 px-4 transition text-sm undefined text-white bg-[#40b5e8] hover:bg-sky-500 hover:text-white"
                >
                  {t("main.continue")}
                </button>
              </div>
              <p className=" mt-3 text-sm text-center">
                {t("main.have_account")}&nbsp;
                <NavLink to="/login" className="text-[#40b5e8] hover:underline">
                  {t("main.in")}
                </NavLink>
              </p>
            </form>
          </div>
          <div className="flex flex-col sm:flex-row items-center  flex-wrap justify-center sm:justify-between gap-4 text-sm py-4">
            <div className="relative flex items-center order-2 sm:order-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                height="16px"
                width="16px"
                className="absolute right-2 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                ></path>
              </svg>
              <select
                className="border border-slate-300 bg-white px-2 py-0 rounded leading-5 h-7 outline-none w-30 appearance-none pr-7 truncate"
                onClick={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue={i18n.resolvedLanguage}
              >
                {Object.keys(locales).map((locale) => (
                  <option key={locale} value={locale}>
                    {locales[locale].title}
                  </option>
                ))}
              </select>
            </div>
            <div className="order-1 sm:order-2 flex items-center flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.about")}
              </p>
              <span className="text-gray-500">|</span>
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.policy")}
              </p>
              <span className="text-gray-500">|</span>
              <p className="text-gray-500 hover:text-black transition-all">
                {t("main.terms")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Register

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <Register />
    </Suspense>
  );
}
