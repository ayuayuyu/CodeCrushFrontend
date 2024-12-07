import { Form, useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/index";
import { Main } from "../../components/Main/index";
import { Header } from "../../components/Header/index";
import { useEffect, useState } from "react";
import "../index.css";
import { InputForm } from "../../components/InputForm/index";
export const Matching = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="layout">
      <Header />
      <div className="layout-inputform">
        <InputForm />
      </div>
    </div>
  );
};
