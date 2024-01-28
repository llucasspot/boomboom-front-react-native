import { ProfileToShow, SerializedTrack, SerializedUser } from "@swagger/api";
import { v4 as uuidv4 } from "uuid";

import { Gender } from "../services/UserService/userServiceI";

export const songs: SerializedTrack[] = [
  {
    name: "Quand je marche",
    artistName: "Ben Mazué",
    image: require("@assets/mokes/songs/paradis.jpg"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
  {
    name: "Flex",
    artistName: "Arma Jackson",
    image: require("@assets/mokes/songs/1.png"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
  {
    name: "Jamais",
    artistName: "Mister V",
    image: require("@assets/mokes/songs/2.png"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
  {
    name: "Feed good",
    artistName: "Julien Granel",
    image: require("@assets/mokes/songs/3.png"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
  {
    name: "Need Some Mo",
    artistName: "Ko Ko Mo",
    image: require("@assets/mokes/songs/4.png"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
  {
    name: "Street and Stories",
    artistName: "Part-Time friends",
    image: require("@assets/mokes/songs/5.jpg"),
    trackId: uuidv4(),
    uri: "",
    popularity: 1,
  },
];

export const user_jessica: ProfileToShow = {
  user: {
    id: uuidv4(),
    name: "Jessica",
    image: require("@assets/mokes/jessica.png"),
  },
  songs: [
    {
      name: "Quand je marche",
      // artistName: "Ben Mazué",
      spotifyImage: require("@assets/mokes/songs/paradis.jpg"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Flex",
      // artistName: "Arma Jackson",
      spotifyImage: require("@assets/mokes/songs/1.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Jamais",
      // artistName: "Mister V",
      spotifyImage: require("@assets/mokes/songs/2.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Feed good",
      // artistName: "Julien Granel",
      spotifyImage: require("@assets/mokes/songs/3.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Need Some Mo",
      // artistName: "Ko Ko Mo",
      spotifyImage: require("@assets/mokes/songs/4.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
  ],
};

export const user_yohan: SerializedUser = {
  id: uuidv4(),
  dateOfBirth: "01/01/1980",
  description: "Yohan description",
  preferedGenderId: Gender.MALE,
  genderId: Gender.MALE,
  // TODO name & trackIds is not send my backend in getProfile endpoint
  name: "Yohan",
  // trackIds: songs.splice(0, 5).map((track) => track.trackId),
};

export const user_helena: ProfileToShow = {
  user: {
    id: uuidv4(),
    name: "Helena",
    image: require("@assets/mokes/helena.webp"),
  },
  songs: [
    {
      name: "Quand je marche",
      // artistName: "Ben Mazué",
      spotifyImage: require("@assets/mokes/songs/paradis.jpg"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Flex",
      // artistName: "Arma Jackson",
      spotifyImage: require("@assets/mokes/songs/1.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Jamais",
      // artistName: "Mister V",
      spotifyImage: require("@assets/mokes/songs/2.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Need Some Mo",
      // artistName: "Ko Ko Mo",
      spotifyImage: require("@assets/mokes/songs/4.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Street and Stories",
      // artistName: "Part-Time friends",
      spotifyImage: require("@assets/mokes/songs/5.jpg"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
  ],
};

export const user_isabella: ProfileToShow = {
  user: {
    id: uuidv4(),
    name: "Isabella",
    image: require("@assets/mokes/isabella.png"),
  },
  songs: [
    {
      name: "Flex",
      // artistName: "Arma Jackson",
      spotifyImage: require("@assets/mokes/songs/1.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Jamais",
      // artistName: "Mister V",
      spotifyImage: require("@assets/mokes/songs/2.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Feed good",
      // artistName: "Julien Granel",
      spotifyImage: require("@assets/mokes/songs/3.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Need Some Mo",
      // artistName: "Ko Ko Mo",
      spotifyImage: require("@assets/mokes/songs/4.png"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
    {
      name: "Street and Stories",
      // artistName: "Part-Time friends",
      spotifyImage: require("@assets/mokes/songs/5.jpg"),
      id: uuidv4(),
      spotifyUri: "",
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      userId: "",
    },
  ],
};
