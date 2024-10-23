'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { AdvertisementService } from "@/services/advertisementsService";
import { useRouter } from "next/navigation";
import { useState } from "react";

const NewAdvertisementPage: React.FC = () => {
    const adService = new AdvertisementService();
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (formData: FormData): boolean => {
        const newErrors: Record<string, string> = {};
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        const startDate = formData.get('startDate') as string;
        const endDate = formData.get('endDate') as string;
        const imageFile = formData.get('image') as File;

        // Existing validations
        if (title.length < 3) newErrors.title = "Title must be at least 3 characters";
        if (description.length < 10) newErrors.description = "Description must be at least 10 characters";
        
        // Enhanced date validations
        if (!startDate) {
            newErrors.startDate = "Start date is required";
        }
        
        if (!endDate) {
            newErrors.endDate = "End date is required";
        }

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const now = new Date();

            if (start < now) {
                newErrors.startDate = "Start date cannot be in the past";
            }

            if (start >= end) {
                newErrors.dates = "End date must be after start date";
            }

            if (end < now) {
                newErrors.endDate = "End date cannot be in the past";
            }
        }

        if (imageFile && !imageFile.type.startsWith('image/')) newErrors.image = "Please upload a valid image file";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        if (!validateForm(formData)) return;

        const newAd = {
            Title: formData.get('title') as string,
            Description: formData.get('description') as string,
            ImageUrl: imagePreview,
            StartDate: new Date(formData.get('startDate') as string),
            EndDate: new Date(formData.get('endDate') as string),
            IsActive: true
        };

        await adService.addAdvertisement(newAd);
        router.push('/advertisements');
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="New Advertisement" />

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Create New Advertisement
                    </h3>
                </div>
                <form onSubmit={handleSubmit} className="p-6.5">
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Title <span className="text-red">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        {errors.title && <p className="text-red mt-1">{errors.title}</p>}
                    </div>

                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Description <span className="text-red">*</span>
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        {errors.description && <p className="text-red mt-1">{errors.description}</p>}
                    </div>
                      <div className="mb-4.5 flex gap-6">
                          <div className="w-1/2">
                              <label className="mb-2.5 block text-black dark:text-white">
                                  Start Date <span className="text-red">*</span>
                              </label>
                              <input
                                  type="datetime-local"
                                  name="startDate"
                                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              />
                              {errors.startDate && <p className="text-red mt-1">{errors.startDate}</p>}
                          </div>
                          <div className="w-1/2">
                              <label className="mb-2.5 block text-black dark:text-white">
                                  End Date <span className="text-red">*</span>
                              </label>
                              <input
                                  type="datetime-local"
                                  name="endDate"
                                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              />
                              {errors.endDate && <p className="text-red mt-1">{errors.endDate}</p>}
                          </div>
                      </div>
                      {errors.dates && <p className="text-red mt-1 mb-4.5">{errors.dates}</p>}
                    <div className="mb-4.5">
                        <label className="mb-2.5 block text-black dark:text-white">
                            Image <span className="text-red">*</span>
                        </label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        {errors.image && <p className="text-red mt-1">{errors.image}</p>}
                        {imagePreview && (
                            <div className="mt-4">
                                <img src={imagePreview} alt="Preview" className="max-w-[200px] rounded" />
                            </div>
                        )}
                    </div>

                    <button type="submit" className="flex justify-center rounded bg-primary p-3 font-medium text-white">
                        Create Advertisement
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default NewAdvertisementPage;