import { Avatar, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TweetCard from "./TweetCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setuploadingImage] = useState(false);
  const [selectImage, setSelectImage] = useState();

  const handleSubmit = (values) => {
    console.log("values ", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },

    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectimage = (event) => {
    setuploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectImage(imgUrl);
    setuploadingImage(false);
  };

  return (
    <div className="space-y-5">
      <section>
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ textAlign: "left" }}
        >
          Home
        </h1>
      </section>

      <section className={`pb-10`}>
        <div className="flex space-x-4">
          <Avatar
            alt="username"
            src="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-469.jpg"
          />
          <div className="w-full" style={{ textAlign: "left" }}>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={`border-none outline-none text-xl bg-transparent`}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>

              <div></div>

              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectimage}
                    />
                  </label>

                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Tweet
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {[1,1,1,1,1].map((item)=><TweetCard/>)}
    </div>
  );
};

export default HomeSection;
