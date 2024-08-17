import React from 'react'

function BookList() {
  return (
    <div className="w-full xxs:p-5 bg-silver-white overflow-x-auto">
      <h2 className="text-2xl mb-16 p-5 font-medium xmd:px-20"><span className="relative inline-block underline underline-offset-[25px]">BOO</span>K LIST</h2>
      <h2 className="text-2xl  font-medium text-center mb-5">SESSION: 2023-24</h2>


      <div className=" overflow-scroll md:m-5 lg:m-16">
        <table className="w-full table-auto table-collapse font-light mb-16">
          <thead>
            <tr>
              <th className="font-light text-left p-4 border-2 border-t-border-grey border-l-border-grey border-r-border-grey" colspan="2">Books & Notebooks list for Classes NUR, LKG & UKG
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey" colspan="2">XSEED book set + following notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">1. English- 02 four ruled notebooks</td>
              <td className="p-4 border-2 border-border-grey">2. Hindi- 02 five ruled notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">3. Maths- 02 square ruled notebooks (with big boxes)	</td>
              <td className="p-4 border-2 border-border-grey">4. G.K- 01 scrapbook with colourful pages</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" colspan="2">1 Crayons Colour box, 1 School dairy , 1 Plastic Folder & 2 Brown cover rolls</td>
            </tr>
          </tbody>

        </table>






        {/* FOR CLASS I  */}

        <table className="w-full table-auto  border-collapse font-light mb-16">

          <thead>
            <tr>
              <th className="p-4 border-2 border-t-border-grey  border-l-border-grey border-r-border-grey font-light text-left" colspan="5">
                Books & Notebooks list for class I</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey" colspan="5">XSEED book set + following notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >1. English-3 (4 Lines)</td>
              <td className="p-4 border-2 border-border-grey" >2. GK1 (4 Lines)</td>
              <td className="p-4 border-2 border-border-grey" >3. EVS (4 Lines)</td>
              <td className="p-4 border-2 border-border-grey" >4. Hindi-3 (Double line)</td>
              <td className="p-4 border-2 border-border-grey" >5. Maths-2 Square boxes</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >6. Drawing Sketch book-1</td>
              <td className="p-4 border-2 border-border-grey" >7. Crayons colour box</td>
              <td className="p-4 border-2 border-border-grey" >8. Plastic Folder</td>
              <td className="p-4 border-2 border-border-grey" >9. Scrapbook with colourful page-1</td>
              <td className="p-4 border-2 border-border-grey" >10. School Diary</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >11. G.K Book- knowledge world-1 (World class publication)</td>
              <td className="p-4 border-2 border-border-grey" >12. 2 Brown cover rolls</td>
              <td className="p-4 border-2 border-border-grey" colspan="3" >&nbsp;</td>


            </tr>

          </tbody>

        </table>

        {/* FOR CLASS-II */}

        <table className="w-full table-auto  border-collapse font-light mb-16">

          <thead>
            <tr>
              <th className="p-4 border-2 border-t-border-grey  border-l-border-grey border-r-border-grey font-light text-left" colspan="5">
                Books & Notebooks list for class II</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey" colspan="5">XSEED book set + following notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >1. English- 3 four ruled notebooks</td>
              <td className="p-4 border-2 border-border-grey" >2. GK- 1 four ruled notebook</td>
              <td className="p-4 border-2 border-border-grey" >3. EVS- 1 four ruled notebooK</td>
              <td className="p-4 border-2 border-border-grey" >4. Hindi- 3 Two ruled notebooks</td>
              <td className="p-4 border-2 border-border-grey" >5. Maths-2 (2 sq.Boxes)</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >6. Drawing Sketch book-1</td>
              <td className="p-4 border-2 border-border-grey" >7. Crayons colour set-1</td>
              <td className="p-4 border-2 border-border-grey" >	8. Plastic Folder-1</td>
              <td className="p-4 border-2 border-border-grey" >9. Scrap book-1</td>
              <td className="p-4 border-2 border-border-grey" >10. School Diary-1 & 2 Brown Cover rolls</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" colspan="5" >11. G.K Book- knowledge world-2 (World class publication)</td>


            </tr>

          </tbody>

        </table>

        {/* LIST FROM 3 TO 5 */}


        <table className="w-full table-auto table-seperate font-light mb-16">
          <thead>
            <tr>
              <th className="w-full text-left p-4 border-2 font-light border-border-grey" colspan="5">
                Books & Notebooks list for Classes 3 to 5</th>
            </tr>
            <tr className="w-full">
              <th className="w-[8%] p-4 font-light border-2 border-l-border-grey border-r-border-grey">CLASS</th>
              <th className="w-[12%] p-4 font-light border-2 border-l-border-grey border-r-border-grey">SUBJECT</th>
              <th className="w-[26.4%] p-4 font-light border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</th>
              <th className="w-[26.3%] p-4 font-light border-2 border-l-border-grey border-r-border-grey">PUBLISHER</th>
              <th className="w-[23.3%] p-4 font-light border-2 border-l-border-grey border-r-border-grey">OTHER THINGS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">III</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">G.K</td>
              <td className="p-4 border-2 border-border-grey">knowledge world.</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">World Class Publications India</td>
              <td className="p-4 border-2 border-border-grey">Single line notebook-9</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">One sided ruled notebook-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart tech 3</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Franklin India Publication.</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Art file -1 School diary-1 Brown cover roll -2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="9">
                IV
              </td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="5">G.K</td>
              <td className="p-4 border-2 border-border-grey">Knowledge world.</td>
              <td className="p-4 border-2 border-border-grey" rowspan="5">World Class Publications India.</td>
              <td className="p-4 border-2 border-border-grey">Single line notebook-9</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">One sided ruled notebook-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Art file-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">School Dairy-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brown cover roll-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart tech 4</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Franklin India Publication.</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">English</td>
              <td className="p-4 border-2 border-border-grey">Pocket dictionary</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S. Science</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6">V</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">G.K</td>
              <td className="p-4 border-2 border-border-grey">Knowledge world</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">World Class Publications India.</td>
              <td className="p-4 border-2 border-border-grey">Single line notebook-9</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">One sided ruled notebook-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart tech 4</td>
              <td className="p-4 border-2 border-border-grey">Franklin India Publication</td>
              <td className="p-4 border-2 border-border-grey">Art file-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)klin India Publication</td>
              <td className="p-4 border-2 border-border-grey">School Dairy-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">English</td>
              <td className="p-4 border-2 border-border-grey">Pocket dictionary</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brown cover roll-2</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S. Science</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>
          </tbody>

        </table>


        {/* 6 to 8 BOOKLIST */}


        <table className="w-full table-auto table-seperate font-light mb-16">
          <thead>
            <tr>
              <td className="p-4 w-full text-left border-2 border-border-grey" colspan="5">Books & Notebooks list for Classes 6 to 8</td>
            </tr>
            <tr>
              <td className="w-[8%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[12%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[28.4%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[24.3%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[24.3%] p-4 border-2 border-l-border-grey border-r-border-grey">NOTEBOOKS</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="8">VI</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">GK</td>
              <td className="p-4 border-2 border-border-grey">Thirst for Knowledge</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">MGS Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Ruled Notebooks-7</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart Tech 6</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Franklin India Publication</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">One Sided Ruled Notebooks-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Pocket dictionary</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Register-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(For Maths)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S.ST</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">School Diary-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">Sanskrit</td>
              <td className="p-4 border-2 border-border-grey">Ruchira Part-1</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="9">VI</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">GK</td>
              <td className="p-4 border-2 border-border-grey">Thirst for Knowledge</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">MGS Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Ruled Notebooks-7</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart Tech 7</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Franklin India Publication</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">One Sided Ruled Notebooks-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Pocket dictionary</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Register-1</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(For Maths)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S.ST</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">School Diary-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Sanskrit</td>
              <td className="p-4 border-2 border-border-grey">Ruchira Part-2</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="9">VII</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">GK</td>
              <td className="p-4 border-2 border-border-grey">Thirst for Knowledge</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">MGS Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Ruled Notebooks-7</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart Tech</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Franklin India Publication</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">One Sided Ruled Notebooks-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Pocket Dictionary</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Register-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(For Maths )</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S.ST</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">School Diary-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" rowspan="2">Sanskrit</td>
              <td className="p-4 border-2 border-border-grey">Ruchira Part-2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td classname="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="9">VIII</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">GK</td>
              <td className="p-4 border-2 border-border-grey">Thirst for Knowledge</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">MGS Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Ruled Notebooks-7</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Computer</td>
              <td className="p-4 border-2 border-border-grey">Smart Tech</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Franklin India Publication</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">One Sided Ruled Notebooks-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Pocket Dictionary</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Register-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(For Maths)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">S.ST</td>
              <td className="p-4 border-2 border-border-grey">Atlas</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">School Diary-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Sanskrit</td>
              <td className="p-4 border-2 border-border-grey">Ruchira Part-3</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>
          </tbody>

        </table>


        {/* CLASS 9 & 10 */}


        <table className="w-full table-auto table-collapse mb-16 font-light">
          <thead>
            <tr>
              <th className="p-4 font-light border-2 border-border-grey text-left" colspan="5">Books & Notebooks list for Classes 9 & 10</th>
            </tr>

            <tr>
              <td className="w-[8%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[12%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[34.4%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[20.3%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[22.3%] p-4 border-2 border-l-border-grey border-r-border-grey">NOTEBOOKS</td>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="11">IX</td>
              <td className="p-4 border-2 border-border-grey">MATHS</td>
              <td className="p-4 border-2 border-border-grey">Mathematics Textbook for class 9</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Hindi</td>
              <td className="p-4 border-2 border-border-grey">क्षितिज भाग-1</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">कृतिका भाग-1</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">English</td>
              <td className="p-4 border-2 border-border-grey">1.Interact in English- Literature Reader</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">2. Interact in English- Main Course Book</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">3. Interact in English- Workbook</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">Science</td>
              <td className="p-4 border-2 border-border-grey">Science textbook for class 9</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">3 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">S.St</td>
              <td className="p-4 border-2 border-border-grey">1.India and the Contemporary World I</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">NCERT</td>
              <td className="p-4 border-2 border-border-grey">4 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">2. Democratic Politics 1</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">3. Contemporary India Part I & II</td>
              <td className="p-4 border-2 border-border-grey">School Diary</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">4. Understanding Economic Development</td>
            </tr>




            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="10">X</td>
              <td className="p-4 border-2 border-border-grey">MATHS</td>
              <td className="p-4 border-2 border-border-grey">Mathematics Textbook for class 10</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Hindi</td>
              <td className="p-4 border-2 border-border-grey">क्षितिज भाग-2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">कृतिका भाग-2</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey">1.First Flight (Prose)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">2. Footprints without feet (Supplementary Reader)</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">Science</td>
              <td className="p-4 border-2 border-border-grey">Science textbook for class 10</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">3 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">S.St</td>
              <td className="p-4 border-2 border-border-grey">1.India and the Contemporary World Ii</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">NCERT</td>
              <td className="p-4 border-2 border-border-grey">4 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">2. Democratic Politics 1</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">3. Contemporary India Part II</td>
              <td className="p-4 border-2 border-border-grey">School Diary</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">4. Understanding Economic Development</td>
            </tr>

          </tbody>
        </table>

        {/* CLASS 11 A & B */}

        <table className="w-full table-auto table-collapse font-light mb-16">

          <thead>
            <tr>
              <th className="p-4 border-2 border-border-grey text-left font-light" colspan="5">Books & Notebooks list for Classes 11 A & B</th>
            </tr>

            <tr>
              <td className="w-[8%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[14%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[39%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[18%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[18%] p-4 border-2 border-l-border-grey border-r-border-grey">OTHER THINGS</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey">11 A+ B</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Physics</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT textbook part 1 & 2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(PCMB)</td>
              <td className="p-4 border-2 border-border-grey">1 LAB MANUAL</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Chemistry</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT textbooks Part 1 & 2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 LAB MANUAL</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Biology</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT TEXTBOOK</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 LAB MANUAL</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Mathematics</td>
              <td className="p-4 border-2 border-border-grey" >NCERT TEXTBOOK</td>
              <td className="p-4 border-2 border-border-grey" >NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Help book- R.D.SHARMA/R.S. Agarwal (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top">Dhanpat Rai Publication</td>
              <td className="p-4 border-2 border-border-grey align-top">1 LAB Manual</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey">1. HORNBILL</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Snapshots</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">P H. E</td>
              <td className="p-4 border-2 border-border-grey">Physical education text book</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Evergreen Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Practical File</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>

              <td className="p-4 border-2 border-border-grey">Optional's</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1. Home Science</td>
              <td className="p-4 border-2 border-border-grey">Home Science textbook</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Premiere publications</td>
              <td className="p-4 border-2 border-border-grey">1 Practical File</td>

            </tr>
            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">1 Scrapbook</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2. Information Practices</td>
              <td className="p-4 border-2 border-border-grey">Information Practices By Sumita Arora</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Dhanpat Rai & Co.</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">3. Computer Science</td>
              <td className="p-4 border-2 border-border-grey">Computer Science with Python -Sumita Arora</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Dhanpat Rai & co.</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">4. Fine Arts</td>
              <td className="p-4 border-2 border-border-grey">History of Indian Arts</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="4">Blue prints educational</td>
              <td className="p-4 border-2 border-border-grey">1 A3 Drawing file</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Pencil Shading Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Acrylic Colour</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brushes Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">5. Engineering Graphics</td>
              <td className="p-4 border-2 border-border-grey">Engineering Graphic II</td>
              <td className="p-4 border-2 border-border-grey">CBSE</td>
              <td className="p-4 border-2 border-border-grey">Five Canvas</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">VP Kumar</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

          </tbody>
        </table>

        <table className="w-full table-auto table-collapse font-light mb-16">

          <thead>
            <tr>
              <th className="p-4 border-2 border-border-grey font-light text-left" colspan="5">Books & Notebooks list for Classes 11 C & D</th>
            </tr>

            <tr>
              <td className="w-[10%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[14%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[39%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[17%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[17%] p-4 border-2 border-l-border-grey border-r-border-grey">OTHER THINGS</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey">11 C+ D</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey">1. HORNBILL</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top">2 Notebooks</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Commerce &</td>
              <td className="p-4 border-2 border-border-grey">2. Snapshots</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">Humanities)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">Accountancy</td>
              <td className="p-4 border-2 border-border-grey">1. NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Accountancy by S C Sharma</td>
              <td className="p-4 border-2 border-border-grey">ABD Publications</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Business Studies</td>
              <td className="p-4 border-2 border-border-grey">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Economics</td>
              <td className="p-4 border-2 border-border-grey align-top">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Microeconomics & Statistics</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">History</td>
              <td className="p-4 border-2 border-border-grey">NCERT Textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Political Science</td>
              <td className="p-4 border-2 border-border-grey">NCERT Textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">P.H.E</td>
              <td className="p-4 border-2 border-border-grey">Physical Education textbook</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Evergreen Publications</td>
              <td className="p-4 border-2 border-border-grey">	1 Practical File</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>

              <td className="p-4 border-2 border-border-grey">Optional's</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">1. Maths</td>
              <td className="p-4 border-2 border-border-grey">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Help Book - R.D Sharma/R.S Aggarwal</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="5">2. Fine Arts</td>
              <td className="p-4 border-2 border-border-grey">History of Indian Arts</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="5">Blueprint Educational</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">A3 Drawing file</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Pencil Shading Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Acrylic Colour</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brushes Kit Five Canvas</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">3. Computer Science</td>
              <td className="p-4 border-2 border-border-grey">Computer Science by Sumita Arora</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Dhanpat Rai & Co.</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">4. Information Practices</td>
              <td className="p-4 border-2 border-border-grey">Information Practices- Sumita Arora</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">	Dhanpat Rai & co. Publications</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">5. Engineering Graphics</td>
              <td className="p-4 border-2 border-border-grey">Engineering Graphic II</td>
              <td className="p-4 border-2 border-border-grey">CBSE</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">(Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">VP Kumar</td>

            </tr>
          </tbody>

        </table>


        <table className="w-full table-auto table-collapse mb-16 font-light">

          <thead>
            <tr>
              <td className="p-4 font-light border-2 border-border-grey text-left" colspan="5">Books & Notebooks list for Classes 12 A & B</td>
            </tr>

            <tr>
              <td className="w-[8%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[14%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[41%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[16%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[18%] p-4 border-2 border-l-border-grey border-r-border-grey">OTHER THINGS</td>

            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey">12 A + B</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">Physics</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">NCERT textbook part 1 & 2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="3">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">PCMB</td>
              <td className="p-4 border-2 border-border-grey">1 Lab Manual & Notebook</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Activity Notebook</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Chemistry</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT textbooks Part 1 &2</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Lab Manual</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Mathematics</td>
              <td className="p-4 border-2 border-border-grey">NCERT textbooks Part 1 & 2</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Help Book - R.D Sharma/R.S. Aggarwal (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Lab Manual</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey">1. Flamingo</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2.Vistas</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Physical Education</td>
              <td className="p-4 border-2 border-border-grey">Physical Education textbook (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Evergreen Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Practical File</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Biology</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>

            </tr>


            <tr>

              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Lab Manual</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">Optional's</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1. Home Science</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Home Science Textbook (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Premiere Publications</td>
              <td className="p-4 border-2 border-border-grey">	1 Scrapbook</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Practical file</td>
            </tr>

            <tr>

              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6">2. Fine Arts</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6" >History of Indian Art (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6" >Blueprint Educational</td>
              <td className="p-4 border-2 border-border-grey">1 A3 Drawing file</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Pencil Shading Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Acrylic Colour</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brushes Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Five Canvas</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">3. Computer Science</td>
              <td className="p-4 border-2 border-border-grey">Computer Science- Sumita Arora (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">4.  Information Practices</td>
              <td className="p-4 border-2 border-border-grey">Information Practices Class 12 by Sumita Arora (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>

            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">5. Engineering Graphics</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Engineering Graphic II (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">CBSE</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">VP Kumar</td>
            </tr>


          </tbody>
        </table>

        {/* 12 C+D */}

        <table className="w-full table-auto tabel-collapse font-light ">

          <thead>
            <tr>
              <th className="p-4 font-light text-left border-2 border-border-grey" colspan="5">Books & Notebooks list for Classes 12 C & D</th>
            </tr>
            <tr>

              <td className="w-[8%] p-4 border-2 border-l-border-grey  border-r-border-grey">CLASS</td>
              <td className="w-[14%] p-4 border-2 border-l-border-grey border-r-border-grey">SUBJECT</td>
              <td className="w-[41%] p-4 border-2 border-l-border-grey border-r-border-grey">NAME OF THE BOOK</td>
              <td className="w-[16%] p-4 border-2 border-l-border-grey border-r-border-grey">PUBLISHER</td>
              <td className="w-[18%] p-4 border-2 border-l-border-grey border-r-border-grey">OTHER THINGS</td>

            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4 border-2 border-border-grey">12 C & D</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">English</td>
              <td className="p-4 border-2 border-border-grey">1. Flamingo</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">(Commerce</td>
              <td className="p-4 border-2 border-border-grey">2. Vistas</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">& Humanities)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Accountancy</td>
              <td className="p-4 border-2 border-border-grey">1. NCERT textbooks Part 1 & 2</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Accountancy by S.C Sharma (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">ABD Publications</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Economics</td>
              <td className="p-4 border-2 border-border-grey">1. NCERT textbooks</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">2 Registers</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Macroeconomics & I.E.D of Economics by Sandeep Garg (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Business Studies</td>
              <td className="p-4 border-2 border-border-grey">1. NCERT textbooks</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1 Register</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Business studies by Poonam Gandhi (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">VK Publications</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">History</td>
              <td className="p-4 border-2 border-border-grey">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Political Science</td>
              <td className="p-4 border-2 border-border-grey">NCERT textbook</td>
              <td className="p-4 border-2 border-border-grey">NCERT</td>
              <td className="p-4 border-2 border-border-grey">2 Registers</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">P.H.E</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Physical education textbook (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Evergreen Publications</td>
              <td className="p-4 border-2 border-border-grey">1 File</td>
            </tr>

            <tr>

              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>

            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey" >Optional's</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">1. Home Science</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Home Science Textbook (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Premiere Publications</td>
              <td className="p-4 border-2 border-border-grey">1 File</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Scrapbook</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">2. Computer Science</td>
              <td className="p-4 border-2 border-border-grey">Computer Science with Python -Sumita Arora (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">3. Information Practices</td>
              <td className="p-4 border-2 border-border-grey">Information Practices Class 12 by Sumita Arora (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">Dhanpat Rai Publications</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6">4. Fine Arts</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6">History of Indian Art (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="6">Blueprint Educational</td>
              <td className="p-4 border-2 border-border-grey">1 A3 Drawing file</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Pencil Shading Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Acrylic Colour</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Brushes Kit</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">Five Canvas</td>
            </tr>


            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">1 Register</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">5. Engineering Graphics</td>
              <td className="p-4 border-2 border-border-grey align-top" rowspan="2">Engineering Graphic II (Reference Book, Not compulsory to purchase)</td>
              <td className="p-4 border-2 border-border-grey">CBSE</td>
              <td className="p-4 border-2 border-border-grey" rowspan="2">&nbsp;</td>
            </tr>

            <tr>
              <td className="p-4 border-2 border-border-grey">&nbsp;</td>
              <td className="p-4 border-2 border-border-grey">VP Kumar</td>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookList
