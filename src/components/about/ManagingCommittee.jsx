import React from "react";
import { managingcommitee } from "../../data/About/managing-commitee-data";

const ManagingCommittee = () => {
  const { heading, title1, title2, title3, description, members } =
    managingcommitee;

  return (
    <section className="relative w-full">
      <div className="w-10/12 pb-20 mx-auto">
        <h1 className="mb-4 text-[2.2rem] font-semibold mt-20 text-black">
          {heading}
        </h1>
        <div className="w-[70px] h-1 bg-black mb-10"></div>
        <p className="mb-4 text-justify">{description}</p>
        <div className="overflow-x-auto">
          <table className="w-full mx-auto mt-10 border border-collapse border-gray-400 table-auto">
            <thead>
              <tr className="border-b-2">
                <th className="px-4 py-2 font-normal border border-gray-200">
                  {title1}
                </th>
                <th className="px-4 py-2 font-normal border border-gray-200">
                  {title2}
                </th>
                <th className="px-4 py-2 font-normal border border-r-0 border-gray-200">
                  {title3}
                </th>
                <th className="px-4 py-2 border border-l-0 border-gray-200"></th>
              </tr>
            </thead>
            <tbody>
              {members.map((data) => (
                <tr
                  key={data.id}
                  className="text-gray-400 hover:bg-gray-100 hover:text-black"
                >
                  <td className="px-4 py-2 border border-gray-200">
                    {data.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {data.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {data.category}
                  </td>
                  <td className="px-4 py-2 border border-gray-200">
                    {data.clause}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManagingCommittee;
