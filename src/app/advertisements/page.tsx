'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { AdvertisementService } from "@/services/advertisementsService";
import { Advertisement } from "@/types/BackendModels";
import Link from "next/link";
import { useEffect, useState } from "react";

const AdvertisementsPage: React.FC = () => {
    const [ads, setAds] = useState<Advertisement[]>([]);
    const [totalAds, setTotalAds] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const adService = new AdvertisementService();

    useEffect(() => {
        const loadAds = async () => {
            const result = await adService.getPaginated(currentPage, pageSize);
            setAds(result.data);
            setTotalAds(result.total);
        };
        loadAds();
    }, [currentPage]);

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Advertisements" />

            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <div className="flex justify-between mb-6">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        All Advertisements
                    </h4>
                    <Link
                        href="/advertisements/new"
                        className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-white hover:bg-opacity-90"
                    >
                        Add New
                    </Link>
                </div>

                <div className="max-w-full overflow-x-auto">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4">
                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    Title
                                </th>
                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    Status
                                </th>
                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    Start Date
                                </th>
                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    End Date
                                </th>
                                <th className="py-4 px-4 font-medium text-black dark:text-white">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ads.map((ad) => (
                                <tr key={ad.Id}>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        {ad.Title}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <span className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${ad.IsActive ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                                            }`}>
                                            {ad.IsActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        {new Date(ad.StartDate).toLocaleDateString()}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        {new Date(ad.EndDate).toLocaleDateString()}
                                    </td>
                                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <button onClick={() => adService.pauseDisplay(ad.Id, ad.IsActive)}>
                                                {ad.IsActive ? 'Pause' : 'Resume'}
                                            </button>
                                            <button onClick={() => adService.deleteAdvertisement(ad.Id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AdvertisementsPage;