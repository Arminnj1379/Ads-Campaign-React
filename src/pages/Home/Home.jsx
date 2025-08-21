import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertService from "../../utils/alertService";
import Header from "../../components/Common/Header";
import AdList from "../../components/AdList/AdList";
import Sidebar from "../../components/SideBar/SideBar";
import { getAllAds } from "../../api/adsService";
import { loggedInUser } from "../../api/userService";

const HomePage = () => {
  const [ads, setAds] = useState([]);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAds = async (title = "", category = "") => {
    debugger;
    setLoading(true);
    try {
      if (title || category) {
        let filter = {};
        if (title) filter.Title = title;
        if (category) filter.Category = category;
        const res = await getAllAds(filter);
        setAds(res.data);
      } else {
        const res = await getAllAds();
        setAds(res.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleCategoryClick = (category) => {
    fetchAds("", category);
  };
  const getCurrentUser = async () => {
    var response = await loggedInUser();
    setUser(response.data);
  };

  const handleSearch = async (query) => {
    fetchAds(query);
  };
  useEffect(() => {
    const redirectLogin = () => {
      AlertService.unauthorized().then(() => {
        navigate("/");
      });
    };
    window.addEventListener("unauthorized", redirectLogin);
    fetchAds();
    getCurrentUser();
    return () => window.removeEventListener("unauthorized", redirectLogin);
  }, [navigate]);

  return (
    <div dir="rtl" className="bg-neutral-800 text-white min-h-screen">
      {/* Header */}
      <Header onSearch={handleSearch} user={user} />
      {/* Main Layout */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row-reverse gap-6">
        {/* Ad List */}
        <div className="flex-1 space-y-6">
          {loading ? <p>در حال بارگذاری...</p> : <AdList ads={ads} />}
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-72">
          <Sidebar onCategoryClick={handleCategoryClick} />{" "}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
