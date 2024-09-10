import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addContact } from "../redux/contactsSlice";

type ContactCreateContactModalProps = {
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function Contact_CreateContactModal({
  setIsModalOpen,
}: ContactCreateContactModalProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    status: "" as "active" | "Inactive",
  });

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      status: value as "active" | "Inactive",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    dispatch(addContact(formData));
    closeModal();
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 text-lg">
      <div className="relative p-4 w-full sm:max-w-md max-h-full">
        <div className="relative  rounded-lg shadow bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-2xl font-black  text-white">
              Add a new contact
            </h3>
            <button
              onClick={closeModal}
              type="button"
              className=" border-2 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              x
            </button>
          </div>
          <form
            className="p-4 md:p-5 space-y-4  text-white"
            onSubmit={handleSubmit}
          >
            <div className="max-w-sm md:max-w-md flex-col gap-2 flex items-start">
              <label htmlFor="firstName" className="font-bold">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                className="w-full max-w-sm h-11 rounded-md text-black px-4 text-lg"
                required
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                maxLength={15}
              />
            </div>
            <div className="max-w-sm md:max-w-md flex-col gap-2 mb-5 flex items-start">
              <label htmlFor="lastName" className="font-bold">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                className="w-full max-w-sm h-11 rounded-md text-black px-4 text-lg"
                required
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                maxLength={15}
              />
            </div>
            <div className=" flex w-full items-center flex-col justify-center bg-blue-300 rounded-md p-3 text-black">
              <h2 className=" font-bold mb-2">Status</h2>
              <div className="flex flex-row w-full items-center justify-center gap-7 ">
                <label className="flex  items-center">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={formData.status === "active"}
                    onChange={handleRadioChange}
                    className="mr-2 w-5 rounded-full h-5"
                    required
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="Inactive"
                    checked={formData.status === "Inactive"}
                    onChange={handleRadioChange}
                    className="mr-2 w-5 rounded-full h-5"
                    required
                  />
                  Inactive
                </label>
              </div>
            </div>
            <div className="w-full flex justify-end gap-5  ">
              <button
                type="reset"
                className="py-2 px-4 rounded-md font-bold bg-red-400 text-white hover:bg-red-500"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="py-2 px-4 rounded-md font-bold bg-green-600 text-white hover:bg-green-700 "
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
