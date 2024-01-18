interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactTableItemProps {
  contact: Contact;
  index: number;
}
