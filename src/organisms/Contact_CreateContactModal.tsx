type ContactCreateContactModalProps = {
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function Contact_CreateContactModal({
  setIsModalOpen,
}: ContactCreateContactModalProps) {
  const closeModal = () => {
    setIsModalOpen(false);
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
          <form className="p-4 md:p-5 space-y-4  text-white">
            <div className="max-w-sm md:max-w-md flex-col gap-2  flex items-start ">
              <label htmlFor="First Name w-full" className="font-bold">
                First Name
              </label>
              <input
                className="w-full max-w-sm h-11 rounded-md text-black px-4 text-lg"
                required
                type="text"
                maxLength={15}
              />
            </div>
            <div className="max-w-sm md:max-w-md flex-col gap-2 mb-5 flex items-start ">
              <label htmlFor="First Name " className="font-bold">
                Last Name
              </label>
              <input
                className="w-full max-w-sm h-11 rounded-md text-black px-4 text-lg"
                required
                type="text"
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
                    required
                    value="active"
                    className="checked:bg-blue-500 indeterminate:bg-gray-300 default:ring-2 required:border-red-500 valid:border-green-500 invalid:border-red-500 mr-2 w-5 rounded-full h-5"
                  />
                  Active
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    required
                    name="status"
                    value="Inactive"
                    className="checked:bg-blue-500 indeterminate:bg-gray-300 default:ring-2 required:border-red-500 valid:border-green-500 invalid:border-red-500 mr-2 w-5 rounded-full h-5"
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
