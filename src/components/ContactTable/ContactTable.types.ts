import { Contact } from '../../redux/contactsSlice';

export interface ContactTableProps {
  getVisibleContacts: Contact[];
  onDeleteContact: (id: string) => void;
}
