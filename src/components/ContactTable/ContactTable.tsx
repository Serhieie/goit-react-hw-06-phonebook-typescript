import { ContactTableItem } from '../ContactTableItem/ContactTableItem';
import { getContacts, Contact } from '../../redux/contactsSlice';
import { getFilterValue } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';

export const ContactTable: React.FC = () => {
  const contacts: Contact[] = useSelector(getContacts);
  const filter: string = useSelector(getFilterValue);

  const getVisibleContacts = (): Contact[] => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts: Contact[] = getVisibleContacts();

  return (
    <div className="overflow-x-auto md:w-full">
      <table
        className="border-2 border-tableBorderColor border-collapese w-[525px]
      mt-5 mb-5 block mx-auto overflow-auto h-[542px] ssm:text-3 md:w-[310px] md:max-w-lg 
      mmd2:max-w-[430px] 1xl2:max-w-2xl skrB md2:w-[330px] ssm:w-[220px]"
      >
        <thead className="text-sm  right-0 left-0 top-0">
          <tr className="border-b-2 border-tableBorderColor">
            <th
              className="items-center w-[5%] bg-tableHeaderBackground 
          text-darkFont font-bold min-w-4 p-2 md:text-3 md:p-0.5 "
            >
              #
            </th>
            <th
              className=" items-center w-[38%] bg-tableHeaderBackground 
          text-darkFont font-bold min-w-4 p-2 md:text-3 md:p-0.5"
            >
              Name
            </th>
            <th
              className="items-center w-[42%] bg-tableHeaderBackground 
          text-darkFont font-bold min-w-4 p-2 md:text-3 md:p-0.5"
            >
              Phone Number
            </th>
            <th
              className="items-center w-[15%] bg-tableHeaderBackground 
          text-darkFont font-bold min-w-4 p-2 md:text-3 md:p-0.5"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="max-h-fit max-w-full text-lg">
          {visibleContacts.map((contact, index) => (
            <ContactTableItem
              key={contact.id}
              contact={contact}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
