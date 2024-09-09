import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function ContactsList() {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className={contacts.length === 0 ? "mt-72" : "mt-7 w-full h-full"}>
      {contacts.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-xl md:text-3xl tracking-tight">
            No contacts available.
            <br /> Please add some contacts to see them here.
          </p>
        </div>
      ) : (
        <ul className=" w-full items-center justify-center h-full flex gap-5 flex-wrap">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="w-full md:max-w-lg md:w-3/4 rounded-lg text-xl p-5 bg-slate-700 text-white font-bold flex flex-col items-start gap-4"
            >
              {contact.firstName} {contact.lastName}
              <h3 className="text-sm font-semibold">
                Status - {contact.status}
              </h3>
              <div className="w-full flex flex-row gap-3  items-end justify-end">
                <button className="px-4 text-sm rounded-md py-2.5 border-2  border-red-700 text-white hover:bg-red-700">
                  Delete
                </button>
                <button className="px-4 text-sm rounded-md py-2.5 bg-orange-400 hover:bg-orange-600">
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
