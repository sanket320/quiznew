import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "IG Mart - Play and Win Rewards",
		template: "%s | IG Mart",
	},
	description:
		"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with IG Mart.",
	keywords:
		"quiz, rewards, play, win, quizzes, knowledge, games, online quizzes",
	authors: [{ name: "IG Mart" }],
	creator: "IG Mart",
	openGraph: {
		title: "IG Mart - Play and Win Rewards",
		description:
			"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with IG Mart.",
		url: "https://ig-mart.shop",
		siteName: "IG Mart",
		images: [
			{
				url: "https://ig-mart.shop/og-image.png",
				width: 1200,
				height: 630,
				alt: "IG Mart Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: "https://ig-mart.shop",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='google-site-verification'
					content='6P4qqz-YgbZOGN9oL0l-TUualoBQRAL_Z76Xt4dcIpU'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-ELV27C0DNK'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-ELV27C0DNK', {
								'page_path': window.location.pathname,
							});
						`,
					}}
				/>

				{/* Google AdSense */}
				<script
					async
					crossOrigin='anonymous'
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8836907612634895'
				/>
				<meta name='application-name' content='IG Mart' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='theme-color' content='#000000' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-300`}
				suppressHydrationWarning>
				<div className='min-h-screen bg-slate-900 max-w-md mx-auto relative'>
					{children}
				</div>
			</body>
		</html>
	);
}
