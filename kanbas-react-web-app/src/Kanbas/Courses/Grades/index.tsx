import { AiOutlineSetting } from "react-icons/ai";
import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

export default function Grades() {
    return (
        <div>
            <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <TbFileImport className="position-relative me-1" />
                    Import
                </button>

                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <TbFileExport className="position-relative me-1" />
                    Export
                    <IoIosArrowDown />
                </button>

                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <AiOutlineSetting />
                </button>
            </div>

            <div className="form-group row mb-4 ">
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                    <label className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Student Names</label>
                    <div className="input-group col-sm-6" >
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <CiSearch />
                        </span>
                        <input className="form-control"
                            placeholder="Search Students" />
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                    <label className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Assignment Names</label>
                    <div className="input-group col-sm-6" >
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <CiSearch />
                        </span>
                        <input className="form-control"
                            placeholder="Search Assignments" />
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-nowrap justify-content-end mb-4">
                <button className="btn btn-lg btn-light me-1 border" >
                    <CiFilter />
                    Apply Filters
                </button>
            </div>
            
            <div>
            <table className="table table-bordered">
                <thead>
                    <tr className="table-light">
                        <th>Student Name</th>
                        <th className="text-center">A1 SETUP <br /> Out of 100</th>
                        <th className="text-center">A2 HTML  <br /> Out of 100</th>
                        <th className="text-center">A3 CSS  <br /> Out of 100</th>
                        <th className="text-center">A4 BOOTSTRAP  <br /> Out of 100</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-white"><td className="text-danger">Jane Adams</td>
                        <td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td></tr>
                    <tr className="table-light"><td className="text-danger">Christina Allen</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                    <tr className="table-white"><td className="text-danger">Samreen Ansari</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                    <tr className="table-light"><td className="text-danger">Han Bao</td>
                        <td>100%</td><td>100%</td>

                        <div className="d-flex">
                            <input type="text" className="form-control" value="88.03%" />
                            <span className="input-group-text">
                                <TbFileImport />
                            </span>
                        </div>
                        <td>98.99%</td></tr>
                    <tr className="table-white"><td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                        <td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td></tr>
                    <tr className="table-light"><td className="text-danger">Siran Cao</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                </tbody>
            </table>
            </div>

        </div>
    );
}