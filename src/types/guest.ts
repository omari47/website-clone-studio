export interface Guest {
  id: string;
  name: string;
  title: string;
  profilePic: string;
  summary: string;
  fullInterview: string;
  introVideo: string;
  highlights: string[];
  chatbotWebhook: string;
}

export interface GuestsData {
  guests: Guest[];
}
