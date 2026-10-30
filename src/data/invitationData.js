/**
 * Wedding Invitation Data Model
 * Couple: Gowtham Raj. P & Soundariya. P
 * Venue: ARS Mahal, Vriddhachalam
 */

export const INVITATION_DATA = {
  header: {
    tagline: "OUR FOREVER BEGINS",
    primaryDate: "20th November 2026, Friday",
    subBlessing: "With hearts full of happiness, we invite you to celebrate the beginning of a beautiful new journey"
  },

  groom: {
    name: "Gowtham Raj. P",
    shortName: "Gowtham",
    parentage: "S/o Mr.Palani & Mrs.Valarmathi"
  },

  bride: {
    name: "Soundariya. P",
    shortName: "Soundariya",
    parentage: "D/o Mr.Palanivel & Mrs.Sivagamasundari"
  },

  events: [
    {
      id: "reception",
      title: "Reception",
      dateFormatted: "19th November 2026",
      dayOfWeek: "Thursday",
      time: "6:00 PM Onwards",
      isoDateTime: "2026-11-19T18:00:00+05:30",
      description: "Join us for an evening of warm greetings, fine dining, and joyous celebrations.",
      badge: "Evening Celebration"
    },
    {
      id: "wedding",
      title: "Wedding",
      dateFormatted: "20th November 2026",
      dayOfWeek: "Friday",
      time: "9:15 AM Onwards",
      isoDateTime: "2026-11-20T09:15:00+05:30",
      description: "Auspicious Muhurtham ceremony as two souls unite in eternal companionship and love.",
      badge: "Subha Muhurtham",
      isPrimaryCountdown: true
    }
  ],

  venue: {
    name: "ARS Mahal",
    city: "Vriddhachalam",
    fullAddress: "ARS Mahal, Vriddhachalam, Cuddalore District, Tamil Nadu",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ARS+Mahal,+Vriddhachalam",
    embedMapsSearch: "ARS Mahal, Vriddhachalam"
  },

  groomRsvp: {
    name: "Gowtham Raj",
    phone: "9043371338",
    formattedPhone: "+91 90433 71338",
    whatsappUrl: "https://wa.me/919043371338?text=Dear%20Gowtham%20Raj,%20Heartiest%20congratulations%20on%20your%20wedding!%20%F0%9F%92%8D%E2%9D%A4%EF%B8%8F%20Wishing%20you%20and%20Soundariya%20a%20lifetime%20of%20love,%20laughter,%20and%20happiness.%20Looking%20forward%20to%20celebrating%20with%20you%20at%20ARS%20Mahal!"
  },

  brideRsvp: {
    name: "Soundariya",
    phone: "6380126821",
    formattedPhone: "+91 63801 26821",
    whatsappUrl: "https://wa.me/916380126821?text=Dear%20Soundariya,%20Heartiest%20congratulations%20on%20your%20wedding!%20%F0%9F%92%8D%E2%9D%A4%EF%B8%8F%20May%20this%20beautiful%20new%20chapter%20be%20filled%20with%20endless%20love,%20laughter,%20and%20divine%20blessings.%20Looking%20forward%20to%20celebrating%20with%20you%20at%20ARS%20Mahal!"
  },

  closingMessage: {
    quote: "Your presence and blessings will make our special day complete",
    closingNote: "Bring your lovely smile, positive vibes, and blessings… that's all we need! Save the dates and celebrate with us!"
  },

  colors: {
    maroon: "#681321",
    deepWine: "#480a14",
    gold: "#c99a4c",
    goldBright: "#e3bc6b",
    cream: "#fcf9f2",
    parchment: "#f8f3e9",
    rosePink: "#f3d8da"
  }
};
