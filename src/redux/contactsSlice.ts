import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  firstName: string;
  lastName: string;
  status: "active" | "inActive";
}

interface ContactsState {
  contacts: Contact[];
}

interface UpdateContactPayload {
  index: number;
  updatedContact: Contact;
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
    removeContact(state, action: PayloadAction<number>) {
      state.contacts.splice(action.payload, 1);
    },
    updateContact(state, action: PayloadAction<UpdateContactPayload>) {
      const { index, updatedContact } = action.payload;
      if (index >= 0 && index < state.contacts.length) {
        state.contacts[index] = updatedContact;
      }
    },
  },
});

export const { addContact, removeContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
