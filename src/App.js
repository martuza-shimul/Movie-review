// import React, { useState, useEffect } from "react";
import React from "react";
import { Router } from "@reach/router";
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
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 2,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 3,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 4,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 5,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 6,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 7,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 8,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 9,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 10,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 11,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 12,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
			],
		},
		{
			id: 2,
			title: "trending",
			cardInfo: [
				{
					id: 1,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 2,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 3,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 4,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 5,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 6,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 7,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 8,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 9,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 10,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 11,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 12,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
			],
		},
		{
			id: 3,
			title: "top rated",
			cardInfo: [
				{
					id: 1,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 2,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 3,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 4,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 5,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 6,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 7,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 8,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 9,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 10,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 11,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 12,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
			],
		},
		{
			id: 4,
			title: "upcoming",
			cardInfo: [
				{
					id: 1,
					name: "Extraction",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 2,
					name: "My Spy",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 3,
					name: "stories",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 4,
					name: "Dying for motherhood",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 5,
					name: "the mad hatter",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 6,
					name: "a muse",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 7,
					name: "home sweet home",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 8,
					name: "finding grace",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 9,
					name: "I dream of peach",
					image: "http://placehold.jp/200x250.jpg",
					rating: 7.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 10,
					name: "Broil",
					image: "http://placehold.jp/200x250.jpg",
					rating: 9.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 11,
					name: "skinned",
					image: "http://placehold.jp/200x250.jpg",
					rating: 6.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
					},
				},
				{
					id: 12,
					name: "Axcellerator",
					image: "http://placehold.jp/200x250.jpg",
					rating: 8.2,
					info: {
						plot:
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
						releaseDate: "12/4/2020",
						genre: "Action, Thriller",
						language: "English",
						budget: "2.5m",
						revenue: "6.5m",
						directior: "Sam",
						story: "Andy",
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
