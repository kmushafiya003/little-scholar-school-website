import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swim from "../../../images/News&Calendar/swim.webp";
import GoBackBtn from "../../common/GoBackBtn";
import { useNavigate } from "react-router-dom";

const SummerCampConsent = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showForm, setShowForm] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    reset();
    setShowForm(false);
  };

  const handleAnotherForm = () => {
    setShowForm(true);
  };

  const goBackHandler = () => {

    navigate(-1);

  }

  return (
    <section className="relative w-full summercmp">

      {/* ---------- container ---------- */}
      <div className=' xl:w-10/12 dxs:w-11/12 mx-auto mb-20 flex flex-col gap-y-6 lg:pt-20 dxs:pt-2 '>
      <GoBackBtn handler={goBackHandler}/>

      <div className="grid grid-cols-1 gap-10 xxl:grid-cols-2">
        <div className="lg:pt-20 dxs:pt-2" >
        <img src={swim} alt="" className="w-full border-2 rounded-xl"/>
        </div>
        <div className="max-w-2xl p-6 mx-auto border-[3.5px] rounded-lg shadow-md bg-white">
          <div className="p-10 border-[3.5px] border-black rounded-md pt-10">
            <h2 className="mb-6 font-semibold text-[1.5rem]">
              SUMMER CAMP CONSENT
            </h2>
            {showForm ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 gap-12 mb-10 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Student Name"
                      {...register("studentName", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    />
                    {errors.studentName && (
                      <p className="text-sm text-red-600">
                        Student name is required
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Parent Name"
                      {...register("parentName", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    />
                    {errors.parentName && (
                      <p className="text-sm text-red-600">
                        Parent name is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-12 mb-8 border-gray-300 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Parents contact no."
                      {...register("contactNo", {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    />
                    {errors.contactNo && (
                      <p className="text-sm text-red-600">
                        Contact number is required and should be 10 digits
                      </p>
                    )}
                  </div>
                  <div>
                    <select
                      {...register("class", { required: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md"
                    >
                      <option value="">--- Choose Class ---</option>
                      <option value="1A">1A</option>
                      <option value="1B">1B</option>
                      <option value="2A">2A</option>
                      <option value="2B">2B</option>
                      <option value="2C">2C</option>
                      <option value="3A">3A</option>
                      <option value="3B">3B</option>
                      <option value="3C">3C</option>
                      <option value="4A">4A</option>
                      <option value="4B">4B</option>
                      <option value="5A">5A</option>
                      <option value="5B">5B</option>
                      <option value="6A">6A</option>
                      <option value="6B">6B</option>
                      <option value="6C">6C</option>
                      <option value="7A">7A</option>
                      <option value="7B">7B</option>
                      <option value="7C">7C</option>
                      <option value="8A">8A</option>
                      <option value="8B">8B</option>
                      <option value="8C">8C</option>
                      <option value="9A">9A</option>
                      <option value="9B">9B</option>
                      <option value="9C">9C</option>
                      <option value="9D">9D</option>
                    </select>
                    {errors.class && (
                      <p className="text-sm text-red-600">
                        Class selection is required
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-10">
                  <select
                    {...register("activity", { required: true })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md"
                  >
                    <option value="">--- Choose Activity ---</option>
                    <option value="Cookery Club">Cookery Club</option>
                    <option value="Theatre Club">Theatre Club</option>
                    <option value="Velvet Concord">Velvet Concord</option>
                    <option value="Asthetic Club">Asthetic Club</option>
                    <option value="Fitness Club">Fitness Club</option>
                    <option value="ICT Club">ICT Club</option>
                    <option value="Painting Club">Painting Club</option>
                    <option value="Rhythmic Foot">Rhythmic Foot</option>
                  </select>
                  {errors.activity && (
                    <p className="text-sm text-red-600">
                      Activity selection is required
                    </p>
                  )}
                </div>
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    {...register("consent", { required: true })}
                    className="mr-2"
                  />
                  <label className="text-sm">
                    By submitting this form, I acknowledge that I have read and
                    agree to the terms and conditions of the event/activity. I
                    also consent to any necessary safety measures and guidelines.
                  </label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-red-600">
                    You must agree before submitting
                  </p>
                )}
                <div className="flex pt-4">
                  <button
                    type="submit"
                    className="w-full px-12 py-4 font-medium leading-4 text-white border border-transparent rounded-full shadow-sm ext-sm bg-dark-blue md:w-auto hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex pt-4">
                <button
                  onClick={handleAnotherForm}
                  className="w-full px-12 py-4 font-medium leading-4 text-white border border-transparent rounded-full shadow-sm ext-sm bg-dark-blue md:w-auto hover:bg-white hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Fill another form
                </button>
              </div>
            )}
            <ToastContainer />
          </div>
        </div>
      </div>

      </div>

     
    </section>
  );
};

export default SummerCampConsent
