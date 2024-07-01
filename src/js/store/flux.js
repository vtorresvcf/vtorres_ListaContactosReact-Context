const getState = ({ getStore, setStore }) => {
  return {
    store: {
      contacts: [],
      url: "https://playground.4geeks.com/contact/agendas/",
    },
    actions: {
      createUserAgenda: async (nombre) => {
        try {
          const res = await fetch(getStore().url + nombre, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log("error: ", error);
        }
      },
      getContacts: async () => {
        try {
          const res = await fetch(getStore().url + "torres/contacts");
          const data = await res.json();
          setStore({ contacts: data.contacts });
        } catch (error) {
          console.log("error: ", error);
        }
      },
      addContact: async (newContact) => {
        try {
          const res = await fetch(getStore().url + "torres/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newContact),
          });
          const data = await res.json();
          setStore({ contacts: [...getStore().contacts, data] });
        } catch (error) {
          console.log("error: ", error);
        }
      },
      editContact: async (newContact, id) => {
        try {
          const res = await fetch(getStore().url + "torres/contacts/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newContact),
          });
          const data = await res.json();
          const contactsFiltered = getStore().contacts.filter(
            (e) => e.id !== id
          );
          setStore({ contacts: [...contactsFiltered, data] });
          setStore({ edit: "" });
        } catch (error) {
          console.log("error: ", error);
        }
      },
      deleteContact: async (id) => {
        try {
          await fetch(getStore().url + "torres/contacts/" + id, {
            method: "DELETE",
          });

          const lista = getStore().contacts;
          lista.splice(lista.id, 1);
          setStore({ contacts: lista });
        } catch (error) {
          console.log("error:" + error);
        }
      },

      // Función sin usar la api
      añadirContacto: (newContact) => {
        setStore({ contacts: [...getStore().contacts, newContact] });
      },
      // Función sin usar la api
      borrarContacto: (index) => {
        const lista = getStore().contacts;
        lista.splice(index, 1);
        setStore({ contacts: lista });
      },

      filterContactEdit: (id) => {
        setStore({ edit: getStore().contacts.filter((e) => e.id === id)[0] });
      },
    },
  };
};

export default getState;
