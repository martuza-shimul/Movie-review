// import React, { useState, useEffect } from "react";
import React from "react";
import { Router } from "@reach/router";
import heroBG from "./img/dummy.jpg";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import TVseriesPage from "./components/TVseriesPage";
import PersonPage from "./components/PersonPage";

function App() {
	const data = [
		{
			id: 1,
			title: "popular",
			cardInfo: [
				{
					id: 1,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 2,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 3,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 4,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 5,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 6,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 7,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 8,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 9,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 10,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 11,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 12,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
			],
		},
		{
			id: 2,
			title: "trending",
			cardInfo: [
				{
					id: 13,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 14,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 15,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 16,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 17,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 18,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 19,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 20,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 21,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 22,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 23,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 24,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
			],
		},
		{
			id: 3,
			title: "top rated",
			cardInfo: [
				{
					id: 24,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 26,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 27,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 28,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 29,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 30,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 31,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 32,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 33,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 34,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 35,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 36,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
			],
		},
		{
			id: 4,
			title: "upcoming",
			cardInfo: [
				{
					id: 37,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 38,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 39,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 40,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 41,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 42,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 43,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 44,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 45,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 46,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 47,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
				{
					id: 48,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					hero: heroBG,
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						runTime: "1h 54m",
						budget: "87,500,000",
						revenue: "304,456,150",
						director: "Sam Hargrave",
						story: "Anthony Russo",
					},
				},
			],
		},
	];

	return (
		<div className="">
			<Header />
			<Router>
				<Home path="/" data={data} />
				<Details path="/details/:id" data={data} />
				<TVseriesPage path="/tv" />
				<PersonPage path="/person" />
			</Router>
			<Footer />
		</div>
	);
}

export default App;
