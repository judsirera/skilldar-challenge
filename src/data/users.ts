import React from 'react';
import { User } from '../models/User';

const users = [new User({
    avatar: "user1.png",
    email: "user1@gmail.com",
    first_name: "James",
    last_name: "Hawlo",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 435,
    location: "Germany",
    keywords: "hello, user, challenge"
}), new User({
    avatar: "user2.png",
    email: "user2@gmail.com",
    first_name: "User",
    last_name: "Two",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 135,
    location: "London",
    keywords: "hello, user, challenge"
}), new User({
    avatar: "user3.png",
    email: "user3@gmail.com",
    first_name: "User",
    last_name: "Three",
    introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.I’ve worked with many professional film teams.",
    value: 274,
    location: "London",
    keywords: "hello, user, challenge"
}),
];

export default users;