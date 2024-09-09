import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  firstName: string;
  lastName: string;
  status: "active" | "inActive";
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
