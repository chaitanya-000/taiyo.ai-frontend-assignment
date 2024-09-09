import { useState } from "react";
import Contact_CreateContactModal from "../organisms/Contact_CreateContactModal";
import ContactsList from "../organisms/Contact_ContactList";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full flex flex-col h-2/3 bg-red-300s justify-between items-center">
      <button
        onClick={toggleModal}
        className=" text-white bg-green-700 hover:bg-green-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-slate-600 font-medium rounded-lg text-lg px-5 py-3.5 text-center "
        type="button"
      >
        Create Contact
      </button>
      <ContactsList />

      {isModalOpen && (
        <Contact_CreateContactModal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}
