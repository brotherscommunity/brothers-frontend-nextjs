'use client'

import { CiSquarePlus } from "react-icons/ci"
import { FaCheckCircle } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import Pagination from "../Main/Pagination"

interface Props {
    list: string[],
    handleApprove: (name: string) => void,
    handleReject: (name: string) => void,
    handleDetails?: (name: string) => void
    isLoading: boolean,
    details?: boolean
}

export default function ApproveReject({list, handleApprove, handleReject, handleDetails, isLoading, details=false} : Props) {
    return (
        <div>
            {list.map((name, index) => {
                return (
                    <div key={index} className="mt-10">
                        <h4 className="tet-lg text-navy font-palanquin"> {index + 1}.  {name} </h4>
                        {details && handleDetails && <button onClick={() => handleDetails(name)} className="flex items-center gap-3 mt-4 mb-6">
                            <CiSquarePlus className="w-5 h-5 rounded-[4px]" />
                            <p className="text-sm text-navy font-palanquin"> Details </p>
                        </button>}
                        <div className="flex items-center gap-7 mt-4">
                            <button disabled={isLoading} onClick={() => handleApprove(name)} className="bg-green-100 w-[150px] h-auto px-7 py-2.5 rounded-md disabled:cursor-not-allowed focus-visible:outline border-none flex items-center gap-3">
                                <FaCheckCircle className="w-4 h-4 text-green-500" />
                                <p className="text-base text-black font-semibold"> Aprrove </p>
                            </button>
                            <button disabled={isLoading} onClick={() => handleReject(name)} className="bg-red-100  w-[150px] h-auto px-7 py-2.5 rounded-md disabled:cursor-not-allowed focus-visible:outline border-none flex items-center gap-3">
                                <MdCancel className="w-4 h-4 text-red-600" />
                                <p className="text-[15px] text-black font-semibold"> Reject </p>
                            </button>
                        </div>
                    </div>
                )
            })}
            {/* TODO: TOTAL NUMBER OF LISTS SHOULD BE list.length */}
            <Pagination TotalNumberOfResults={10} pageSize={3} />
        </div>
    )
}
